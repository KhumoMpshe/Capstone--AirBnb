import "./Reservations.css";

function Reservations() {

    const reservations = [
        {
            id: 1,
            property: "Modern Apartment",
            location: "Cape Town",
            checkIn: "2026-07-10",
            checkOut: "2026-07-15",
            guests: 2,
            total: 7500,
        },
        {
            id: 2,
            property: "Beach House",
            location: "Durban",
            checkIn: "2026-08-05",
            checkOut: "2026-08-12",
            guests: 4,
            total: 12400,
        },
    ];

    return (
        <div className="reservations-page">

            <h1>My Reservations</h1>

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
                                <button className="cancel-btn">
                                    Cancel
                                </button>
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Reservations;