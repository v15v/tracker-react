import React, {useState} from "react";
import {v4} from 'uuid'
import SelectMonth from "./SelectMonth";
import EditHabitModal from "./EditHabitModal";
import AddHabit from "./AddHabit";
import HabitList from "./HabitList";
import {HabitInterface} from "../Types/habit";

interface Props {
    habits: HabitInterface[],
    daysInMonth: number
}

const Main = ({habits: monthHabits, daysInMonth}: Props) => {
    let oldHabitName = ""
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
    const showModal = (id: string) => {
        oldHabitName = habits.filter(habit => habit.id === id)[0].name
        // FIXME: сделать это посредством React в виртуальном DOM
        // console.log(document.querySelector("#habitNewName")!)
        document.querySelector(".modal")!.classList.add("is-active")
        document.querySelector("#habitNewName")!.setAttribute("value", oldHabitName)
    }
    // FIXME: type any
    // FIXME: перетирает дефолтное значение. Только в первый раз value = oldHabitName,
    //  все остальные разы value=""
    const saveEditHabit = (e: any) => {
        if (e.key === "Enter") {
            const newName = e.target.value
            // FIXME: убрать log
            console.log(oldHabitName)
            console.log(newName)
            const habit = habits.filter(habit => habit.name === oldHabitName)[0]
            habit.name = newName
            console.log(habit)
            const newHabits = habits.filter(habit => habit.name !== oldHabitName)
            console.log(newHabits)
            setHabits(newHabits)
            e.target.value = ""
            closeModal()
        }
    }

    const closeModal = () => {
        // FIXME: сделать это посредством React в виртуальном DOM
        document.querySelector(".modal")!.classList.remove("is-active")
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
                       onRemoveHabit={onRemoveHabitSave}
                       onEditHabit={showModal} />
            {/*Добавляем модальное окно для редактирования имени привычки*/}
            <EditHabitModal onCloseModal={closeModal}
                            onEditSave={saveEditHabit} />
        </section>
    )
}

export default Main