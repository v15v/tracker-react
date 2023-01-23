import React from "react";
import getDoubleDigit from "../utils/doubleDigit";
import {FaEdit, FaTrash} from "react-icons/fa";
import {HabitInterface} from "../types/habit";

interface Props {
    habit: HabitInterface,
    daysInMonth: number,
    onRemove: any,
    onEdit: any
}

const Habit = ({
                   habit,
                   daysInMonth,
                   onRemove = (f: any) => f,
                   onEdit = (f: any) => f
               }: Props) => {
    // Создаем массив дней месяца из двухзначных чисел
    // [01, 02, 03, ... , daysInMonth]
    let days = []
    for (let i = 0; i < daysInMonth; i++) {
        let day = getDoubleDigit(i + 1)
        days.push(day)
    }

    // Формируем строку для конкретной привычки
    return (
        <>
            <div className="columns is-multiline is-mobile no-listener">
                <div
                    className="column has-text-right tracker has-text-weight-bold habit-name no-listener">
                    {habit.name}
                </div>
                {
                    // TODO: выделить в отдельный компонент.
                    // Выводим все дни месяца для этой привычки
                    days.map((day) => (
                        <div key={day} className="column is-narrow tracker">
                            {day}
                        </div>
                    ))
                }
                {/*Иконка редактирования*/}
                <div className="column is-narrow habit-icons no-listener">
                    <div className="icon-text no-listener">
                      <span className="icon has-text-info no-listener">
                          <FaEdit onClick={() => onEdit(habit.id)} />
                      </span>
                    </div>
                </div>
                {/*Иконка удаления*/}
                {/*TODO: запрашивать подтверждение удаления*/}
                <div className="column is-narrow habit-icons no-listener">
                    <div className="icon-text no-listener">
                    <span className="icon has-text-info no-listener">
                        <FaTrash onClick={() => onRemove(habit.id)} />
                    </span>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Habit