import React from "react";
import {FaEdit, FaTrash} from "react-icons/fa";
import {HabitInterface} from "../types/habit";
import DaysList from "./DaysList";

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
            <div className="columns is-multiline is-mobile no-listener">
                <div
                    className="column has-text-right tracker has-text-weight-bold habit-name no-listener">
                    {habit.name}
                </div>
                {/*Выводим все дни месяца для этой привычки*/}
                {/*TODO: передавать статус каждого дня*/}
                <DaysList daysInMonth={daysInMonth}
                          planned={habit.planned}
                          done={habit.done}
                          undone={habit.undone}
                          onClickDay={(day: string, dayStatus: string) => onClickDayInHabit(day, dayStatus, habit)} />
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