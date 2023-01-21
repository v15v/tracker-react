import React from "react"

// TODO: Написать функционал добавления привычки
// FIXME: type any
const AddHabit = ({onClick = (f: any) => f}) => (
    <input id="addHabit" className="input has-text-right"
           type="text"
           onClick={onClick}
           placeholder="Добавить привычку" />
)

export default AddHabit