import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Location from "./pages/Location";
import LocationDetails from "./pages/LocationDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HostSignup from "./pages/HostSignup";
import Reservations from "./pages/Reservations";
import Footer from "./components/Footer/Footer";
import AdminAddListing from "./pages/AdminAddListing";
import AdminListings from "./pages/AdminListings";
import HostDashboard from "./pages/HostDashboard";
import HostHome from "./pages/HostHome";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Header />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<LocationDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/host-signup" element={<HostSignup />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route
          path="/host"
          element={
            user?.role === "host" || user?.role === "admin"
              ? <HostDashboard />
              : <Navigate to="/" />
          }
        >
          <Route index element={<HostHome />}/>
          <Route path="dashboard" element={<HostHome />}/>
          <Route path="listings" element={<AdminListings />}/>
          <Route path="add-listing" element={<AdminAddListing />}/>
        </Route>
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;