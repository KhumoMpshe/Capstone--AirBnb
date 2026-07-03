export const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function getMonthData(date) {
    const month = date.getMonth();
    const year = date.getFullYear();

    const monthName = date.toLocaleString("default", {
        month: "long",
    });

    const firstDay = new Date(year, month, 1).getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    return {
        month,
        year,
        monthName,
        firstDay,
        daysInMonth,
    };
}