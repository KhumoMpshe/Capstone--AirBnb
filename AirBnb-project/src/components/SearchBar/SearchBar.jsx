import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

function SearchBar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function handleSearch() {
        navigate("/location");
    }

    return (
        <div className="search-bar">
            <div className="search-item">
                <label>Where</label>

                <input
                    type="text"
                    placeholder="Search destinations"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="search-item">
                <label>When</label>

                <input
                    type="text"
                    placeholder="Add dates"
                />
            </div>

            <div className="search-item">
                <label>Who</label>

                <input
                    type="text"
                    placeholder="Add guests"
                />
            </div>

            <button onClick={handleSearch}>
                <FaSearch />
            </button>
        </div>
    );
}

export default SearchBar;