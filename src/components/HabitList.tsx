import React from 'react'
import Habit from "./Habit";
import {HabitInterface} from '../types/habit'

interface Props {
    habits: HabitInterface[],
    daysInMonth: number,
    onRemoveHabit: any,
    onEditHabit: any,
    onClickDayInHabitList: any
}

const HabitList = ({
                       habits,
                       daysInMonth,
                       onRemoveHabit = (f: any) => f,
                       onEditHabit = (f: any) => f,
                       onClickDayInHabitList = (f: any) => f
                   }: Props) => (
// Выводим данные для каждой сохранённой привычки
    <div id="month" className="container is-widescreen">
        {habits.map((habit) =>
            <Habit key={habit.id} habit={habit}
                   daysInMonth={daysInMonth} onRemove={onRemoveHabit}
                   onEdit={onEditHabit}
                   onClickDayInHabit={(
                       day: string,
                       dayStatus: string,
                       habit: HabitInterface
                   ) => onClickDayInHabitList(day, dayStatus, habit)} />
        )}
    </div>
)

export default HabitList