import React from "react";
import {FaEdit, FaTrash} from "react-icons/fa";
import {HabitInterface} from "../../types/habit";
import DaysList from "../DaysList";
import styles from "./Habit.module.sass"

interface Props {
    habit: HabitInterface,
    daysInMonth: number,
    onRemove: any,
    onEdit: any,
    onClickDayInHabit: any
}

const Habit = ({
                   habit,
                   daysInMonth,
                   onRemove = (f: any) => f,
                   onEdit = (f: any) => f,
                   onClickDayInHabit = (f: any) => f
               }: Props) => {

    // Формируем строку для конкретной привычки
    return (
        <>
            <div className="columns is-multiline is-mobile">
                <div
                    className={`column has-text-right ${styles.tracker} has-text-weight-bold ${styles.habitName}`}>
                    {habit.name}
                </div>
                {/*Выводим все дни месяца для этой привычки*/}
                <DaysList daysInMonth={daysInMonth}
                          planned={habit.planned}
                          done={habit.done}
                          undone={habit.undone}
                          onClickDay={(day: string, dayStatus: string) => onClickDayInHabit(day, dayStatus, habit)} />
                {/*Иконка редактирования*/}
                <div className={`column is-narrow ${styles.habitIcons}`}>
                    <div className="icon-text">
                      <span className="icon has-text-info">
                          <FaEdit onClick={() => onEdit(habit.id)} />
                      </span>
                    </div>
                </div>
                {/*Иконка удаления*/}
                {/*TODO: Скрывать при удалении, а не удалять из базы*/}
                <div className={`column is-narrow ${styles.habitIcons}`}>
                    <div className="icon-text">
                    <span className="icon has-text-info">
                        <FaTrash onClick={() => onRemove(habit.id)} />
                    </span>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Habit