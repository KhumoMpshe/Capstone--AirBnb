import Day from "./Day";
import { weekDays, getMonthData } from "./calendarUtils";

function Month({
    date,
    checkIn,
    checkOut,
    onDateClick,
}) {

    const {
        month,
        year,
        monthName,
        firstDay,
        daysInMonth,
    } = getMonthData(date);

    const days = [];

    for (let i = 0; i < firstDay; i++) {
        days.push(
            <div
                key={`empty-${i}`}
                className="calendar-empty"
            />
        );
    }

    for (let day = 1; day <= daysInMonth; day++) {

        const fullDate = new Date(year, month, day);

        days.push(
            <Day
                key={day}
                day={day}
                date={fullDate}
                checkIn={checkIn}
                checkOut={checkOut}
                onClick={onDateClick}
            />
        );
    }

    return (
        <div className="calendar-month">

            <h3>
                {monthName} {year}
            </h3>

            <div className="calendar-weekdays">
                {weekDays.map((weekday) => (
                    <span key={weekday}>{weekday}</span>
                ))}
            </div>

            <div className="calendar-grid">
                {days}
            </div>

        </div>
    );
}

export default Month;