import React from "react";
import styles from './WeekDays.module.sass'
import getWeekDaysArray from "../../utils/getWeekDaysArray";

interface Props {
    month: number,
}

// Рендерим все дни недели для месяца.
const WeekDays = ({month}: Props) => {
    const weekDays = getWeekDaysArray(month)
    const today = new Date()
    const dd = String(today).split(" ")[2]
    const mm = today.getMonth()
    const dayIsCurrent = (month: number, mm: number, i: number, dd: string): boolean => {
        return (month === mm) && ((i + 1) === parseInt(dd))
    }

    return (
        <div className={`columns is-mobile level-right ${styles.spaceRight}`}>
            {weekDays.map((weekDay, i) => {
                return (
                    <div key={i + 1}
                         className={`column is-narrow ${styles.weekDays} ${dayIsCurrent(month, mm, i, dd) ? styles.current : ""}`}>
                        {weekDay}
                    </div>
                )
            })}
        </div>
    )
}

export default WeekDays