import React from "react";
import getDoubleDigit from "../utils/doubleDigit";
import {FaEdit, FaTrash} from "react-icons/fa";

interface Props {
    habit: {
        name: string
    },
    daysInMonth: number
}

const Habit = ({habit, daysInMonth}: Props) => {
    const showModal = () => {
        // FIXME: сделать это посредством React в виртуальном DOM
        // document.querySelector("#habitNewName")!.value = habit.name
        console.log(document.querySelector("#habitNewName")!)
        document.querySelector(".modal")!.classList.add("is-active")
    }
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
                          <FaEdit onClick={showModal} />
                      </span>
                    </div>
                </div>
                {/*Иконка удаления*/}
                <div className="column is-narrow habit-icons no-listener">
                    <div className="icon-text no-listener">
                    <span className="icon has-text-info no-listener">
                        <FaTrash />
                    </span>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Habit