import React, {useEffect, useState} from "react";
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
    const [oldHabitName, setOldHabitName] = useState("defaulOldHabitName")
    const [habits, setHabits] = useState(monthHabits);
    const [modalActive, setModalActive] = useState(false)
    const [modalInputDefaultValue, setModalInputDefaultValue] = useState("defaultValue")
    // // Similar to componentDidMount and componentDidUpdate:
    // useEffect(() => {
    //     document.querySelector("#habitNewName")!.setAttribute("value", oldHabitName)
    // });
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
    // При нажатии на иконку редактирования всплывает модальное окно.
    // В этом окне один input. Нужно в этот input вставить имя привычки,
    // которую выбрали для редактирования. Использую useState modalInputDefaultValue.
    // Нажатие иконки тригерит showModal. В ней я получаю имя привычки по переданному id
    // и сохраняю как oldHabitName. Меняю useState, но, как я понял,
    // изменения производятся после того, как весь код внутри showModal выполнится,
    // поэтому сначала элемент рендерится, а уже потом value назначается тот, что нужен.
    // Получается, что мы видим некорректное значение в поле input,
    // но при этом в DOM дереве значение value корректное - имя привычки, которую выбрали для редактирования.
    // Как сделать так, чтобы в input отразилось то, что я хочу?
    const showModal = (id: string) => {
        console.log("Show modal 1: modalInputDefaultValue:", modalInputDefaultValue)
        console.log("Show modal 2: oldHabitName:", oldHabitName)
        const oldName = habits.filter(habit => habit.id === id)[0].name
        console.log("Show modal 3: oldName:", oldName)
        setOldHabitName(oldName)
        console.log("Show modal 4: oldHabitName:", oldHabitName)
        setModalInputDefaultValue(oldName)
        console.log("Show modal 5: modalInputDefaultValue:", modalInputDefaultValue)
        console.log("Show modal 6: modalActive:", modalActive)
        modalActive ? setModalActive(false) : setModalActive(true)
        console.log("Show modal 7: modalActive:", modalActive)
        console.log(document.querySelector(".modal"))
        // FIXME: сделать это посредством React в виртуальном DOM
        // document.querySelector(".modal")!.classList.add("is-active")
        // document.querySelector("#habitNewName")!.setAttribute("value", oldHabitName)
    }
    // FIXME: type any
    // FIXME: перетирает дефолтное значение. Только в первый раз value = oldHabitName,
    //  все остальные разы value=""
    const saveEditHabit = (e: any) => {
        if (e.key === "Enter") {
            const newName = e.target.value
            // FIXME: убрать log
            console.log("oldHabitName:", oldHabitName)
            console.log("newName:", newName)
            const habit = habits.filter(habit => habit.name === oldHabitName)[0]
            habit.name = newName
            console.log("habit", habit)
            const newHabits = habits.filter(habit => habit.name !== oldHabitName)
            console.log("newHabits", newHabits)
            setHabits(newHabits)
            // e.target.value = ""
            closeModal()
        }
    }

    const closeModal = () => {
        setModalInputDefaultValue("")
        setModalActive(false)
        console.log("modalInputDefaultValue:", modalInputDefaultValue)
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
                            onEditSave={saveEditHabit}
                            modalActive={modalActive}
                            value={modalInputDefaultValue} />
        </section>
    )
}

export default Main