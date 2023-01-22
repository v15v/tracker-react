import React, {useState} from "react";
import {v4} from 'uuid'
import SelectMonth from "./SelectMonth";
import EditHabit from "./EditHabit";
import AddHabit from "./AddHabit";
import HabitList from "./HabitList";
import {HabitInterface} from "../Types/habit";

interface Props {
    habits: HabitInterface[],
    daysInMonth: number
}

const Main = ({habits: monthHabits, daysInMonth}: Props) => {
    const [habits, setHabits] = useState(monthHabits);
    const onAddHabit = (e: any) => {
        if (e.key === "Enter") {
            const newHabit = {
                // Генерируем id
                id: v4(),
                name: e.target.value
            }
            const newHabits = [...habits, newHabit]
            setHabits(newHabits)
            e.target.value = ""
        }
    }
    const onRemoveHabitSave = (id: string) => {
        const newHabits = habits.filter(habit => habit.id !== id)
        setHabits(newHabits)
    }
    return (<section className="section my-6">
            {/*Выводим поле выбора месяца и добавления новой привычки*/}
            <div className="container block is-widescreen">
                <div className="tile is-ancestor">
                    <div className="tile">
                        <div className="select block">
                            <SelectMonth />
                        </div>
                    </div>
                    <div className="tile">
                        <div className="control block container is-widescreen">
                            <AddHabit onAdd={onAddHabit} />
                        </div>
                    </div>
                </div>
            </div>
            {/*Выводим список всех привычек на месяц*/}
            <HabitList habits={habits} daysInMonth={daysInMonth}
                       onRemoveHabit={onRemoveHabitSave} />
            {/*Добавляем модальное окно для редактирования имени привычки*/}
            <EditHabit />
        </section>
    )
}

export default Main