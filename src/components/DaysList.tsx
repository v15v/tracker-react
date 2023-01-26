import React from "react";
import getMonthDaysArray from "../utils/getMonthDaysArray";
import {GetDayStatus} from "../utils/habitStatus";

interface Props {
    daysInMonth: number,
    onClickDay: any,
    planned: number[],
    done: number[],
    undone: number[]
}

const DaysList = ({daysInMonth, onClickDay, planned, done, undone}: Props) => {
    const days = getMonthDaysArray(daysInMonth)
    return (
        <>
            {days.map((day) => {
                const dayStatus = GetDayStatus({planned, done, undone, day})
                return <div key={day}
                            className={`column is-narrow tracker ${dayStatus}`}
                            onClick={() => onClickDay(day, dayStatus)}>
                    {day}
                </div>
            })}
        </>
    )
}

export default DaysList