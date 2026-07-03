function Day({
    day,
    date,
    checkIn,
    checkOut,
    onClick,
}) {
    const isCheckIn =
        checkIn &&
        date.toDateString() === checkIn.toDateString();

    const isCheckOut =
        checkOut &&
        date.toDateString() === checkOut.toDateString();

    const inRange =
        checkIn &&
        checkOut &&
        date > checkIn &&
        date < checkOut;

    let className = "calendar-day";

    if (isCheckIn || isCheckOut) {
        className += " selected";
    } else if (inRange) {
        className += " in-range";
    }

    return (
        <button
            className={className}
            onClick={() => onClick(date)}
        >
            {day}
        </button>
    );
}

export default Day;