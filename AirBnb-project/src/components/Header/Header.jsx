import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { FaAirbnb, FaGlobe, FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import SearchBar from "../SearchBar/SearchBar";
import { AuthContext } from "../../context/AuthContext";
import "./Header.css";

function Header() {
    const { user, logout } = useContext(AuthContext);
    const [showMenu, setShowMenu] = useState(false);

    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/");
    }

    return (
        <header className="header">

            <div className="header-top">
                <div className="logo">
                    <Link to="/">
                        <FaAirbnb className="logo-icon" />
                        <span>airbnb</span>
                    </Link>
                </div>

                <div className="header-nav">
                    <button className="nav-btn active">Places to stay</button>
                    <button className="nav-btn">Experiences</button>
                    <button className="nav-btn">Online Experiences</button>
                </div>

                <div className="header-right">

                    {(!user || user.role ==="user") && (
                        <Link to="/host-signup">Become a host</Link>
                    )}

                    {user && (
                        <span className="welcome-user">
                            Hi, {user.username |"User"}
                        </span>
                    )}

                    <button className="icon-btn">
                        <FaGlobe />
                    </button>

                    <div className="profile-menu">

                        <button
                            className="profile-btn"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <HiMenu />
                            <FaUserCircle />
                        </button>

                        {showMenu && (

                            <div className="dropdown-menu">

                                <Link to="/reservations">
                                    Reservations
                                </Link>

                                {(user?.role === "admin" || user?.role === "host") && (
                                    <Link to="/admin/add-listing" className="admin-btn">
                                        Add Listing
                                    </Link>
                                )}

                                {user ? (

                                    <button onClick={handleLogout}>
                                        Logout
                                    </button>

                                ) : (

                                    <Link to="/login">
                                        Login
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </div>   
            </div>

            <div className="header-search">
                <SearchBar />
            </div>

        </header>
    );
}

export default Header;