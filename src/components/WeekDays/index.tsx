import React from "react";
import styles from './WeekDays.module.sass'
import getWeekDaysArray from "../../utils/getWeekDaysArray";

interface Props {
    month: number,
}

// Рендерим все дни недели для месяца.
const WeekDays = ({month}: Props) => {
    const weekDays = getWeekDaysArray(month)
    return (
        <div className={`columns is-mobile level-right ${styles.spaceRight}`}>
            {/*<div*/}
            {/*    className={`column ${styles.tracker}`}>*/}
            {/*</div>*/}
            {weekDays.map((weekDay, i) => {
                return <div key={i}
                            className={`column is-narrow ${styles.tracker}`}
                >
                    {weekDay}
                </div>
            })}
            {/*<div*/}
            {/*    className={`column ${styles.spaceRight}`}>*/}
            {/*</div>*/}
        </div>
    )
}

export default WeekDays