import { useEffect, useState } from "react";
import "./Reservations.css";

function Reservations() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const storedReservations =
            JSON.parse(localStorage.getItem("reservations")) || [];
        setReservations(storedReservations);
    }, []);

    const handleCancel = (id) => {
        const updatedReservations = reservations.filter(
            (reservation) => reservation.id !== id
        );

        setReservations(updatedReservations);
        localStorage.setItem(
            "reservations",
            JSON.stringify(updatedReservations)
        );
    };

    return (
        <div className="reservations-page">

            <h1>My Reservations</h1>

            {reservations.length === 0 ? (
                <div className="no-reservations">
                    <p>You have no reservations yet.</p>
                    <p>Select dates and reserve a stay to see it here.</p>
                </div>
            ) : (
                <table className="reservations-table">

                    <thead>
                    <tr>
                        <th>Property</th>
                        <th>Location</th>
                        <th>Check-in</th>
                        <th>Check-out</th>
                        <th>Guests</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {reservations.map((reservation) => (

                        <tr key={reservation.id}>

                            <td>{reservation.property}</td>

                            <td>{reservation.location}</td>

                            <td>{reservation.checkIn}</td>

                            <td>{reservation.checkOut}</td>

                            <td>{reservation.guests}</td>

                            <td>R{reservation.total}</td>

                            <td>
                                <button
                                    className="cancel-btn"
                                    onClick={() => handleCancel(reservation.id)}
                                >
                                    Cancel
                                </button>
                            </td>

                        </tr>

                    ))}

                </tbody>

                </table>
            )}

        </div>
    );
}

export default Reservations;