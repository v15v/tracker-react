import React from "react";

const SelectMonth = () => {
    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

    // Получаем ID месяца, чтобы выбрать его при загрузке страницы
    let date = new Date()
    let defaultMonthID = date.getMonth()

    // Генерируем опции для выбора месяца. Текущий месяц - дефолтный.
    return (
        <select id="month-name" defaultValue={defaultMonthID}>
            {monthNames.map((month, index) => <option
                key={index} value={index}>{month}</option>)}
        </select>
    )
}

export default SelectMonth