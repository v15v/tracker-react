import React from "react"

// FIXME: type any
const AddHabit = ({onAdd = (f: any) => f}) => (
    <input id="addHabit" className="input has-text-right"
           type="text"
           onKeyDown={onAdd}
           placeholder="Добавить привычку" />
)

export default AddHabit