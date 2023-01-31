import React from "react"
import {v4} from 'uuid'
import SelectMonth from "./SelectMonth"
import EditHabitModal from "./EditHabitModal"
import AddHabit from "./AddHabit"
import HabitList from "./HabitList"
import {HabitInterface} from "../types/habit"
import {SetHabitStatus} from "../utils/habitStatus"
import axios from "axios";
import {CreateOnBackend, UpdateOnBackend} from "../utils/storage";

const myConf = require("../config.json")

const Main = () => {
    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    const monthNamesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // Получаем ID месяца, чтобы выбрать его при загрузке страницы
    const date = new Date()
    const defaultMonthID = date.getMonth()
    const defaultDaysInMonth = new Date(2023, defaultMonthID + 1, 0).getDate()

    const defaultHabits: HabitInterface[] = []
    const [selectedMonth, setSelectedMonth] = React.useState(defaultMonthID)
    const [saveToBackend, setSaveToBackend] = React.useState(false)
    const [oldHabitName, setOldHabitName] = React.useState("")
    const [habits, setHabits] = React.useState(defaultHabits)
    const [modalActive, setModalActive] = React.useState(false)
    const [daysInMonth, setDaysInMonth] = React.useState(defaultDaysInMonth)
    const [monthUrl, setMonthUrl] = React.useState(monthNamesEn[defaultMonthID])
    const [monthIdBackend, setMonthIdBackend] = React.useState("0")
    React.useEffect(() => {
        if (saveToBackend) {
            UpdateOnBackend(monthIdBackend, habits)
            console.log("Save to backend")
        }
        // eslint-disable-next-line
    }, [habits])
    React.useEffect(() => {
        // TODO: корректно обработать ошибку
        // TypeError: Cannot read properties of undefined (reading 'habits')
        axios({
            method: 'get',
            url: `http://${myConf.host}:${myConf.port}/items/months?fields=id,habits&filter[name][_eq]=${monthUrl}`,
            headers: {'Authorization': `Bearer ${myConf.token}`}
        })
            .then(({data}) => {
                setHabits(data.data[0].habits)
                setMonthIdBackend(data.data[0].id)
            }).catch((error) => {
            // FIXME: Сервер не сразу отдает свежие данные.
            //  Получается запрос возвращает пустой элемент,
            //  хотя данные мы уже записали и они есть в базе.
            // FIXME: перезаписывает данные уже созданные пустым значением.
            //  Надо отловить где он это делает.
            console.error(error)
            if (error.toString() === "TypeError: Cannot read properties of undefined (reading 'habits')") {
                CreateOnBackend(monthUrl)
                setHabits([])
            }
            console.warn("По данному месяцу нет информации")
        })
    }, [monthUrl])

    const onAddHabit = (e: any) => {
        if (e.key === "Enter") {
            const newHabit: HabitInterface = {
                // Генерируем id
                id: v4(),
                name: e.target.value,
                planned: [],
                done: [],
                undone: []
            }
            const newHabits = [...habits, newHabit]
            setSaveToBackend(true)
            setHabits(newHabits)
            // Очищаем input
            e.target.value = ""
        }
    }
    const onRemoveHabitSave = (id: string) => {
        const newHabits = habits.filter((habit: HabitInterface) => habit.id !== id)
        setSaveToBackend(true)
        setHabits(newHabits)
    }
    const showModal = (id: string) => {
        const oldHabitName = habits.filter((habit: HabitInterface) => habit.id === id)[0].name
        setOldHabitName(oldHabitName)
        setModalActive(true)
    }
    // FIXME: type any
    const saveEditHabit = (e: any) => {
        if (e.key === "Enter") {
            const newHabitName = e.target.value
            const newHabits = [...habits]
            const habit = newHabits.filter((habit: HabitInterface) => habit.name === oldHabitName)[0]
            habit.name = newHabitName
            setSaveToBackend(true)
            setHabits(newHabits)
            closeModal()
        }
    }
    const closeModal = () => {
        setModalActive(false)
    }
    const onMonthSelected = (e: any) => {
        const selectedMonthId = parseInt(e.target.value)
        setSelectedMonth(selectedMonthId)
        setSaveToBackend(false)
        setMonthUrl(monthNamesEn[selectedMonthId])
        const newHabits = [...habits]
        setHabits(newHabits)
        // TODO: Вынести в отдельную функцию
        setDaysInMonth(new Date(2023, selectedMonthId + 1, 0).getDate())
    }


    return (<section className="section my-6">
            {/*Выводим поле выбора месяца и добавления новой привычки*/}
            <div className="container block is-widescreen">
                <div className="tile is-ancestor">
                    <div className="tile">
                        <div className="select block">
                            <SelectMonth onSelected={onMonthSelected}
                                         defaultMonthID={selectedMonth}
                                         monthNames={monthNames} />
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
                       ) => SetHabitStatus(day, dayStatus, habit, setHabits, habits, setSaveToBackend)
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