import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CostCalculator.css";

function CostCalculator({ location, pricePerNight, checkIn, checkOut, setCheckIn, setCheckOut }) {

  const [guests, setGuests] = useState(1);
  const navigate = useNavigate();

  const oneDay = 1000 * 60 * 60 * 24;

  const nights =
    checkIn && checkOut
    ? Math.ceil(
        (checkOut - checkIn) / (1000 * 60 * 60 * 24)
      )
  : 0;

  const cleaningFee = 350;
  const serviceFee = 250;

  const validPrice = Number(pricePerNight) || 0;

  const subtotal = validPrice * nights;
  const total = subtotal + cleaningFee + serviceFee;
  
  function handleReserve() {
  if (!checkIn || !checkOut) {
    alert("Please select your check-in and check-out dates.");
    return;
  }

  const reservations =
    JSON.parse(localStorage.getItem("reservations")) || [];

  const reservation = {
    id: Date.now(),
    property: location.title,
    image: location.image,
    location: location.location,
    checkIn: checkIn.toLocaleDateString("en-ZA"),
    checkOut: checkOut.toLocaleDateString("en-ZA"),
    guests,
    pricePerNight: validPrice,
    nights,
    total,
  };

  reservations.push(reservation);

  localStorage.setItem(
    "reservations",
    JSON.stringify(reservations)
  );

  alert("Reservation successful!");

  navigate("/reservations");
}

  return (
    <div className="booking-card">

      <div className="booking-price">
        <strong>R{validPrice}</strong>
        <span>/ night</span>
      </div>

      <div className="booking-box">

        <div className="booking-row">

          <div>
            <label>CHECK-IN</label>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                placeholderText="Add dates"
                dateFormat="dd MMM yyyy"
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
              />
          </div>

          <div>
            <label>CHECK-OUT</label>

            <p className="selected-date">
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                placeholderText="Add dates"
                dateFormat="dd MMM yyyy"
                minDate={checkIn}
                selectsEnd
                startDate={checkIn}
                endDate={checkOut}
              />
            </p>
          </div>

        </div>

        <div className="guest-row">

          <label>GUESTS</label>

          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
          >
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
            <option value={4}>4 Guests</option>
            <option value={5}>5 Guests</option>
            <option value={6}>6 Guests</option>
          </select>

        </div>

      </div>

      <button className="reserve-btn" onClick={handleReserve}>
        Reserve
      </button>

      <p className="reserve-note">
        You won't be charged yet
      </p>

      <div className="price-breakdown">

        <div className="price-row">
          <span>
            R{validPrice} × {nights} night{nights > 1 ? "s" : ""}
          </span>

          <span>R{subtotal}</span>
        </div>

        <div className="price-row">
          <span>Cleaning fee</span>
          <span>R{cleaningFee}</span>
        </div>

        <div className="price-row">
          <span>Service fee</span>
          <span>R{serviceFee}</span>
        </div>

      </div>

      <hr />

      <div className="total-price">
        <strong>Total</strong>
        <strong>R{total}</strong>
      </div>

    </div>
  );
}

export default CostCalculator;