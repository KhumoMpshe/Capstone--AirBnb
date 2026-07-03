import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchBar.css";

function SearchBar() {
  const navigate = useNavigate();

  const cities = [
    "Cape Town",
    "Johannesburg",
    "Durban",
    "Knysna",
  ];

  const [city, setCity] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const [guests, setGuests] = useState(1);

  const dropdownRef = useRef(null);

  const filteredCities = cities.filter((item) =>
    item.toLowerCase().includes(city.toLowerCase())
  );

  function handleSearch() {
    const params = new URLSearchParams();

    if (city) params.set("city", city);
    if (checkIn) params.set("checkIn", checkIn.toISOString().split("T")[0]);
    if (checkOut) params.set("checkOut", checkOut.toISOString().split("T")[0]);
    params.set("guests", guests);

    navigate(`/location?${params.toString()}`);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div className="search-bar">

      <div className="search-item city-search" ref={dropdownRef}>
        <label>Where</label>

        <input
          type="text"
          placeholder="Search destinations"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
        />

        {showDropdown && (
          <div className="city-dropdown">

            {filteredCities.length > 0 ? (
              filteredCities.map((item) => (
                <div
                  key={item}
                  className="city-option"
                  onClick={() => {
                    setCity(item);
                    setShowDropdown(false);
                  }}
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="city-option">
                No matching cities
              </div>
            )}

          </div>
        )}
      </div>

      <div className="search-item">
        <label>Check In</label>

        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date)}
          placeholderText="Add dates"
          dateFormat="dd MMM yyyy"
        />
      </div>

      <div className="search-item">
        <label>Check Out</label>

        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date)}
          placeholderText="Add dates"
          dateFormat="dd MMM yyyy"
          minDate={checkIn}
        />
      </div>

      <div className="search-item">
        <label>Guests</label>

        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        >
          {[1,2,3,4,5,6].map((num) => (
            <option key={num} value={num}>
              {num} Guest{num > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleSearch}>
        <FaSearch />
      </button>

    </div>
  );
}

export default SearchBar;