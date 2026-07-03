import { useState } from "react";
import Month from "./Month";
import "./Calendar.css";

function Calendar({
    checkIn,
    checkOut,
    setCheckIn,
    setCheckOut,
}) {
    const [currentDate, setCurrentDate] = useState(new Date());

    const nextMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
    );

    const previousMonth = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() - 1,
                1
            )
        );
    };

    const nextMonth = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + 1,
                1
            )
        );
    };

    const handleDateClick = (date) => {

        if (!checkIn || (checkIn && checkOut)) {
            setCheckIn(date);
            setCheckOut(null);
            return;
        }

        if (date > checkIn) {
            setCheckOut(date);
            return;
        }

        setCheckIn(date);
        setCheckOut(null);
    };

    return (
        <div className="calendar">

            <div className="calendar-header">

                <button onClick={previousMonth}>
                    ❮
                </button>

                <button onClick={nextMonth}>
                    ❯
                </button>

            </div>

            <div className="calendar-months">

                <Month
                    date={currentDate}
                    checkIn={checkIn}
                    checkOut={checkOut}
                    onDateClick={handleDateClick}
                />

                <Month
                    date={nextMonthDate}
                    checkIn={checkIn}
                    checkOut={checkOut}
                    onDateClick={handleDateClick}
                />

            </div>

        </div>
    );
}

export default Calendar;