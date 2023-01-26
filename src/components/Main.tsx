import React from "react";
import {v4} from 'uuid'
import SelectMonth from "./SelectMonth";
import EditHabitModal from "./EditHabitModal";
import AddHabit from "./AddHabit";
import HabitList from "./HabitList";
import {HabitInterface} from "../types/habit";

interface Props {
    habits: HabitInterface[],
    daysInMonth: number
}

const Main = ({habits: monthHabits, daysInMonth}: Props) => {
    const [oldHabitName, setOldHabitName] = React.useState("")
    const [habits, setHabits] = React.useState(monthHabits);
    const [modalActive, setModalActive] = React.useState(false)
    const onAddHabit = (e: any) => {
        if (e.key === "Enter") {
            const newHabit: HabitInterface = {
                // Генерируем id
                id: v4(),
                // name: e.target.value,
                name: "Habit test",
                planned: [1],
                done: [2],
                undone: [3]
            }
            const newHabits = [...habits, newHabit]
            setHabits(newHabits)
            // Очищаем input
            e.target.value = ""
        }
    }
    const onRemoveHabitSave = (id: string) => {
        const newHabits = habits.filter(habit => habit.id !== id)
        setHabits(newHabits)
    }

    const showModal = (id: string) => {
        const oldHabitName = habits.filter(habit => habit.id === id)[0].name
        setOldHabitName(oldHabitName)
        setModalActive(true)
    }
    // FIXME: type any
    const saveEditHabit = (e: any) => {
        if (e.key === "Enter") {
            const newHabitName = e.target.value
            const habit = habits.filter(habit => habit.name === oldHabitName)[0]
            habit.name = newHabitName
            setHabits(habits)
            closeModal()
        }
    }

    const closeModal = () => {
        setModalActive(false)
    }

    // TODO: убрать полученный день из массива полученного статуса и добавить в следующий массив статуса
    const SetHabitStatus = (day: string, dayStatus: string, habit: HabitInterface) => {
        console.log(day)
        console.log(dayStatus)
        console.log(habit)
        switch (dayStatus) {
            case "free":
                habit.planned.push(parseInt(day))
                const targetHabit = habits.filter(habit => habit.name === habit.name)[0]
                targetHabit.planned = habit.planned
                setHabits(habits)
                console.log(habits)
                break;
            // case "planned":
            //     habit.planned.push(parseInt(day))
            //     habit.done.push(parseInt(day))
            //     break;
            // case значение3:
            //     инструкция
            //     break;
            // case значение4:
            //     инструкция
            //     break;
            // default:
            //     инструкция
        }
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
                       onEditHabit={showModal}
                       onClickDayInHabitList={(
                           day: string,
                           dayStatus: string,
                           habit: HabitInterface
                       ) => SetHabitStatus(day, dayStatus, habit)
                       }
            />
            {/*Добавляем модальное окно для редактирования имени привычки*/}
            {/*Оно выводится, когда была нажата кнопка редактирования привычки*/}
            {modalActive && <EditHabitModal onCloseModal={closeModal}
                                            onEditSave={saveEditHabit}
                                            value={oldHabitName} />
            }
        </section>
    )
}

export default Main