import React from "react";
import getMonthDaysArray from "../../utils/getMonthDaysArray";
import {GetDayStatus} from "../../utils/habitStatus";
import styles from './DaysList.module.sass'

interface Props {
    daysInMonth: number,
    onClickDay: (day: string, dayStatus: string) => void,
    planned: number[],
    done: number[],
    undone: number[]
}

// Рендерим все дни для месяца.
const DaysList = ({daysInMonth, onClickDay, planned, done, undone}: Props) => {
    const days = getMonthDaysArray(daysInMonth)
    return (
        <>
            {days.map((day) => {
                const dayStatus = GetDayStatus({planned, done, undone, day})
                return <div key={day}
                            className={`column is-narrow ${styles.tracker} ${styles[dayStatus]}`}
                            onClick={() => onClickDay(day, dayStatus)}>
                    {day}
                </div>
            })}
        </>
    )
}

export default DaysList