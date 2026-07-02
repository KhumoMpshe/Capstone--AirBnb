import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CostCalculator.css";

function CostCalculator({ pricePerNight }) {
  const [checkIn, setCheckIn] = useState(new Date());

  const [checkOut, setCheckOut] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );

  const [guests, setGuests] = useState(1);

  const oneDay = 1000 * 60 * 60 * 24;

  const handleCheckInChange = (date) => {
    if (!date) return;
    setCheckIn(date);

    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);

    if (checkOut <= date) {
      setCheckOut(nextDay);
    }
  };

  const handleCheckOutChange = (date) => {
    if (!date) return;
    if (date <= checkIn) {
      const nextDay = new Date(checkIn);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(nextDay);
      return;
    }
    setCheckOut(date);
  };

  const nights = Math.max(
    1,
    Math.ceil((checkOut - checkIn) / oneDay)
  );

  const cleaningFee = 350;
  const serviceFee = 250;

  const validPrice = Number(pricePerNight) || 0;

  const subtotal = validPrice * nights;
  const total = subtotal + cleaningFee + serviceFee;

  return (
    <div className="booking-card">

      <div className="booking-price">
        <h2>R{validPrice}</h2>
        <span>/ night</span>
      </div>

      <div className="booking-box">

        <div className="booking-row">

          <div>
            <label>CHECK-IN</label>

            <DatePicker
              selected={checkIn}
              onChange={handleCheckInChange}
              dateFormat="dd MMM yyyy"
            />
          </div>

          <div>
            <label>CHECK-OUT</label>

            <DatePicker
              selected={checkOut}
              onChange={handleCheckOutChange}
              dateFormat="dd MMM yyyy"
              minDate={checkIn}
            />
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

      <button className="reserve-btn">
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