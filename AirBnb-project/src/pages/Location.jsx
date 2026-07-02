import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import "./Location.css";

import AccommodationCard from "../components/AccommodationCard/AccommodationCard";
import FilterBar from "../components/FilterBar/FilterBar";
import locations from "../data/locations";

function Location() {
    const [searchParams] = useSearchParams();
    const [selectedType, setSelectedType] = useState("All");

    const city = searchParams.get("city");

    const filteredLocations = locations.filter((location) => {
        const matchesCity =
            !city || location.location === city;

        const matchesType =
            selectedType === "All" ||
            location.type
                .toLowerCase()
                .includes(selectedType.toLowerCase());

        return matchesCity && matchesType;
    });

    return (
        <main className="location-page">

            <Link to="/" className="back-button">
                ← Back to destinations
            </Link>

            <div className="location-header">

                <p className="location-count">
                    {filteredLocations.length}+ stays
                    {city && ` in ${city}`}
                </p>

                <h1>
                    {city || "All Stays"}
                </h1>

            </div>

            <FilterBar
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />

            <div className="location-list">

                {filteredLocations.map((location) => (
                    <AccommodationCard
                        key={location.id}
                        accommodation={location}
                    />
                ))}

            </div>

        </main>
    );
}

export default Location;