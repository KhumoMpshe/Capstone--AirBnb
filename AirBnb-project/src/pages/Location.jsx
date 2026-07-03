import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import "./Location.css";

import AccommodationCard from "../components/AccommodationCard/AccommodationCard";
import FilterBar from "../components/FilterBar/FilterBar";
import locations from "../data/locations";

function Location() {
  const [searchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState("All");

  const city = searchParams.get("city") || "";
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const guests = Number(searchParams.get("guests")) || 1;

  const filteredLocations = locations.filter((location) => {
    // City filter
    const matchesCity =
      !city ||
      location.location.toLowerCase().includes(city.toLowerCase());

    // Property type filter
    const matchesType =
      selectedType === "All" ||
      location.type.toLowerCase().includes(selectedType.toLowerCase());

    // Guest filter
    const matchesGuests = location.guests >= guests;

    return matchesCity && matchesType && matchesGuests;
  });

  return (
    <main className="location-page">

      <Link to="/" className="back-button">
        ← Back to destinations
      </Link>

      <div className="location-header">

        <p className="location-count">
          {filteredLocations.length} stays
          {city && ` in ${city}`}
        </p>

        <h1>
          {city ? city : "All Stays"}
        </h1>

        {(checkIn || checkOut) && (
          <p className="search-summary">
            {checkIn && `Check-in: ${checkIn}`}
            {checkIn && checkOut && " | "}
            {checkOut && `Check-out: ${checkOut}`}
            {" | "}
            {guests} Guest{guests > 1 ? "s" : ""}
          </p>
        )}

      </div>

      <FilterBar
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <div className="location-list">

        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <AccommodationCard
              key={location.id}
              accommodation={location}
            />
          ))
        ) : (
          <h2>No listings match your search.</h2>
        )}

      </div>

    </main>
  );
}

export default Location;