import React from "react";

const EditHabit = () => {
    // // FIXME: реализовать корректное добавление новой привычки вместо addTestHabit
    // const addTestHabit = (): any => {
    //     setHabits([...habits, {name: "Test Habit"}])
    // };
    // FIXME: type any
    const save = (e: any) => {
        if (e.key === "Enter") {
            const newName = e.target.value
            // FIXME: убрать log
            // TODO: написать сохранение нового имени
            console.log(newName)
            console.log()
            Close()
        }
    }

    const Close = () => (
        document.querySelector(".modal")!.classList.remove("is-active")
    )

    // Модальное окно для редактирования имени привычки
    return (
        <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-content">
                <input className="input" type="text"
                       placeholder="Введите имя привычки"
                       id="habitNewName" defaultValue=""
                       onKeyDown={save} />
            </div>
            <button className="modal-close is-large"
                    aria-label="close"
                    onClick={Close}>
            </button>
        </div>
    )
}

export default EditHabit