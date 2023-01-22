import React from 'react'
import Habit from "./Habit";
import {HabitInterface} from '../Types/habit'

interface Props {
    habits: HabitInterface[],
    daysInMonth: number,
    onRemoveHabit: any
}

const HabitList = ({ habits, daysInMonth, onRemoveHabit = (f: any) => f }: Props) => (
// Выводим данные для каждой сохранённой привычки
    <div id="month" className="container is-widescreen">
        {habits.map((habit) =>
            <Habit key={habit.id} habit={habit}
                   daysInMonth={daysInMonth} onRemove={onRemoveHabit} />
        )}
    </div>
)

export default HabitList