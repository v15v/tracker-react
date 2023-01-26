import React from "react";
import getMonthDaysArray from "../utils/getMonthDaysArray";

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
                const dayStatus = () => {
                    if (planned.indexOf(parseInt(day)) >= 0) {
                        return "planned"
                    } else {
                        if (done.indexOf(parseInt(day)) >= 0) {
                            return "done"
                        } else {
                            if (undone.indexOf(parseInt(day)) >= 0) {
                                return "undone"
                            } else {
                                return ""
                            }
                        }
                    }
                }
                return <div key={day}
                            className={`column is-narrow tracker ${dayStatus()}`}
                            onClick={() => onClickDay(day)}>
                    {day}
                </div>
            })}
        </>
    )
}

export default DaysList