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
          path="/admin/add-listing" 
          element={
            user?.role === "admin" || user?.role === "host"
            ? <AdminAddListing />
            : <Navigate to="/" />
          }
        />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;