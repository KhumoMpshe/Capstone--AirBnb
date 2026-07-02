import { Link } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";
import "./AccommodationCard.css";

function AccommodationCard({ accommodation }) {
    return (
        <Link
            to={`/location/${accommodation.id}`}
            className="accommodation-link"
        >
            <article className="accommodation-card">

                <img
                    src={accommodation.image}
                    alt={accommodation.title}
                />

                <div className="accommodation-info">

                    <div className="card-header">

                        <div>
                            <small>{accommodation.type}</small>

                            <h2>{accommodation.title}</h2>
                        </div>

                        <FaHeart className="heart-icon" />

                    </div>

                    <p>{accommodation.location}</p>

                    <p>
                        {accommodation.guests} guests •
                        {accommodation.bedrooms} bedrooms •
                        {accommodation.bathrooms} bathrooms
                    </p>

                    <p>
                        {accommodation.amenities.join(" • ")}
                    </p>

                    <div className="card-footer">

                        <span className="rating">
                            <FaStar />
                            {accommodation.rating}
                            ({accommodation.reviews} reviews)
                        </span>

                        <h3>
                            R{accommodation.price}
                            <span>/night</span>
                        </h3>

                    </div>

                </div>

            </article>
        </Link>
    );
}

export default AccommodationCard;