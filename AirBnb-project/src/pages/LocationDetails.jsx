import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CostCalculator from "../components/CostCalculator/CostCalculator";
import locations from "../data/locations";
import hostImage from "../assets/images/host.jpg";
import { FaStar, FaHome, FaWifi, FaKey, FaCar, FaSwimmingPool, FaTv } from "react-icons/fa";
import Calendar from "../components/Calendar/Calendar";
import "./LocationDetails.css";
import { FaT, FaWind } from "react-icons/fa6";

function LocationDetails() {
    const { id } = useParams();

    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);

    const nights =
    checkIn && checkOut
    ? Math.ceil(
            (checkOut - checkIn) / (1000 * 60 * 60 * 24)
    )
    : 0;

    const formatDate = (date) => {
    if (!date) return "Add date";

        return date.toLocaleDateString("en-ZA", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    const location = locations.find(
        (item) => item.id === Number(id)
    );

    if (!location) {
        return <h2>Location not found.</h2>;
    }

    return (
        <>
            <main className="location-details">

                <div className="listing-header">

                    <h1>{location.title}</h1>

                    <div className="listing-meta">

                        <div className="listing-rating">
                            <FaStar /> {location.rating} · {location.reviews} reviews · {location.location}, South Africa
                        </div>

                        <div className="listing-actions">

                            <button>🔗 Share</button>

                            <button>❤ Save</button>

                        </div>

                    </div>

                </div>

                <div className="image-gallery">

                    <img
                        src={location.gallery[0] || location.image}
                        alt={location.title}
                        className="gallery-main"
                    />

                    <div className="gallery-grid">
                        {location.gallery?.slice(1, 5).map((photo, index) => (
                            <img
                                key={index}
                                src={photo}
                                alt={`${location.title} ${index + 2}`}
                             />
                         ))}
                    </div>

                </div>

                <div className="details-content">

                    <div className="details-left">
                        <section className="host-info">

                            <div>

                                <h2>
                                    Hosted by Khumo
                                </h2>

                                <p>
                                    {location.guests} guests ·
                                    {" "}
                                    {location.bedrooms} bedrooms ·
                                    {" "}
                                    {location.bathrooms} bathrooms
                                </p>

                            </div>

                            <img
                                src={hostImage}
                                alt="Host"
                                className="host-avatar"
                            />

                        </section>

                        <section className="features">

                            <div className="feature">

                                <h4><FaHome /> Entire home</h4>

                                <p>
                                    You'll have the whole place to yourself.
                                </p>

                            </div>

                            <div className="feature">

                                <h4><FaKey /> Self check-in</h4>

                                <p>
                                    Check yourself in with the keypad.
                                </p>

                            </div>

                            <div className="feature">

                                <h4><FaWifi /> Fast Wi-Fi</h4>

                                <p>
                                    Perfect for streaming and remote work.
                                </p>

                            </div>

                        </section>

                    
                        <div className="details-container">

                            <section className="description">
                                
                                <p>Enjoy a comfortable stay in this beautiful Airbnb. Relax, explore the surrounding attractions, and make unforgettable memories.</p>
                            
                            </section>

                            <section className="sleep-section">

                                <h2>Where you'll sleep</h2>

                                <div className="sleep-cards">

                                    <div className="sleep-card">
                                        <h3>Bedroom 1</h3>
                                        <p>Queen Bed</p>
                                    </div>

                                    <div className="sleep-card">
                                        <h3>Bedroom 2</h3>
                                        <p>Double Bed</p>
                                    </div>

                                </div>

                            </section>

                            <section className="amenities">
                                <h2>What this place offers</h2>

                                <ul>
                                    <li><FaWifi /> Free Wi-Fi</li>
                                    <li><FaCar /> Free Parking</li>
                                    <li><FaHome /> Kitchen</li>
                                    <li><FaSwimmingPool /> Swimming Pool</li>
                                    <li><FaWind /> Air Conditioning</li>
                                    <li><FaTv /> TV</li>
                                    <li><FaHome /> Washer</li>
                                    <li><FaHome /> Dryer</li>
                                    <li><FaHome /> Solar Panels</li>
                                </ul>
                            </section>

                            
                            <section className="booking-summary">
                                <div className="booking-summary-header">
                                    <div>
                                        <h2>
                                            {nights > 0
                                                ? `${nights} night${nights > 1 ? "s" : ""}`
                                                : "Select your stay"}
                                            {" "}in {location.location}
                                        </h2>

                                        <p>
                                            {formatDate(checkIn)} - {formatDate(checkOut)}
                                        </p>
                                    </div>
                                    <button
                                        className="clear-dates"
                                        onClick={() => {
                                            setCheckIn(null);
                                            setCheckOut(null);
                                        }}
                                    >
                                        Clear dates
                                    </button>

                                </div>

                                <div className="calendar-preview">
                                    <Calendar
                                        checkIn={checkIn}
                                        checkOut={checkOut}
                                        setCheckIn={setCheckIn}
                                        setCheckOut={setCheckOut}
                                    />
                                </div>
                                        

                                <div className="rating-breakdown">
                                    <div className="rating-summary">
                                        <div className="rating-score"><FaStar /> {location.rating}</div>
                                        <div className="rating-text">{location.reviews} reviews</div>
                                    </div>
                                    <div className="rating-bars">
                                        <div className="rating-row">
                                            <span>Cleanliness</span>
                                            <span>5.0</span>
                                            <div className="bar"><div className="bar-fill" style={{ width: '100%' }} /></div>
                                        </div>
                                        <div className="rating-row">
                                            <span>Communication</span>
                                            <span>5.0</span>
                                            <div className="bar"><div className="bar-fill" style={{ width: '100%' }} /></div>
                                        </div>
                                        <div className="rating-row">
                                            <span>Check-in</span>
                                            <span>5.0</span>
                                            <div className="bar"><div className="bar-fill" style={{ width: '100%' }} /></div>
                                        </div>
                                        <div className="rating-row">
                                            <span>Accuracy</span>
                                            <span>4.9</span>
                                            <div className="bar"><div className="bar-fill" style={{ width: '98%' }} /></div>
                                        </div>
                                        <div className="rating-row">
                                            <span>Location</span>
                                            <span>4.9</span>
                                            <div className="bar"><div className="bar-fill" style={{ width: '98%' }} /></div>
                                        </div>
                                        <div className="rating-row">
                                            <span>Value</span>
                                            <span>4.7</span>
                                            <div className="bar"><div className="bar-fill" style={{ width: '94%' }} /></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="reviews">

                                <h2>Reviews</h2>

                                <div className="review">
                                    <h4>Ntokozo Matsipa</h4>
                                    ⭐⭐⭐⭐⭐
                                    <p>Amazing stay! Beautiful location and very clean.</p>
                                </div>

                                <div className="review">
                                    <h4>Kristen Mpshe</h4>
                                ⭐⭐⭐⭐⭐
                                    <p>Would definitely book again.</p>
                                </div>

                            </section>

                            <section className="particulars">
                                <h2>Host particulars</h2>
                                <div className="host-particulars">
                                    <img
                                        src={hostImage}
                                        alt="Host"
                                        className="host-avatar"
                                    />
                                    <div className="particulars-info">
                                        <p><strong>Hosted by Khumo</strong></p>
                                        <p>{location.guests} guests · {location.bedrooms} bedrooms · {location.bathrooms} bathrooms</p>
                                        <p>{location.location}, South Africa</p>
                                    </div>
                                </div>
                            </section>

                            <section className="things-to-know">
                                <h2>Things to know</h2>
                                <div className="things-grid">
                                    <div className="things-card">
                                        <h3>House rules</h3>
                                        <ul>
                                            <li>Check-in: After 4:00 PM</li>
                                            <li>Checkout: 10:00 AM</li>
                                            <li>Self check-in with lockbox</li>
                                            <li>Not suitable for infants (under 2 years)</li>
                                            <li>No smoking</li>
                                            <li>No pets</li>
                                            <li>No parties or events</li>
                                        </ul>
                                    </div>
                                    <div className="things-card">
                                        <h3>Health & safety</h3>
                                        <ul>
                                            <li>Committed to Airbnb’s enhanced cleaning process</li>
                                            <li>Airbnb’s social-distancing and other COVID-19-related guidelines apply</li>
                                            <li>Carbon monoxide alarm</li>
                                            <li>Smoke alarm</li>
                                        </ul>
                                    </div>
                                    <div className="things-card">
                                        <h3>Cancellation policy</h3>
                                        <p>Free cancellation before Feb 14</p>
                                        <button className="show-more">Show more</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="details-right">
                        <CostCalculator
                            location={location}
                            pricePerNight={location.price}
                            checkIn={checkIn}
                            checkOut={checkOut}
                            setCheckIn={setCheckIn}
                            setCheckOut={setCheckOut}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}

export default LocationDetails;