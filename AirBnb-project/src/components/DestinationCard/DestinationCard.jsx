import { Link } from "react-router-dom";
import "./DestinationCard.css";

function DestinationCard({ destination }) {
    return (
        <Link
            to={`/location?city=${encodeURIComponent(destination.title)}`}
            className="destination-link"
        >
            <article className="destination-card">
                <img
                    src={destination.image}
                    alt={destination.title}
                    className="destination-image"
                />

                <div className="destination-info">
                    <h3>{destination.title}</h3>
                        <p className="destination-distance">{destination.distance || destination.country}</p>
                    <p className="destination-desc">{destination.description}</p>
                </div>
            </article>
        </Link>
    );
}

export default DestinationCard;