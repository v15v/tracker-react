import React from "react";
import getMonthDaysArray from "../utils/getMonthDaysArray";

interface Props {
    daysInMonth: number
}

const DaysList = ({daysInMonth}: Props) => {
    const days = getMonthDaysArray(daysInMonth)
    console.log(days)
    return (
        <>
            {days.map((day) => (
                <div key={day} className="column is-narrow tracker">
                    {day}
                </div>
            ))}
        </>
    )
}

export default DaysList