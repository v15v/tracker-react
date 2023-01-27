import React from "react";

interface Props {
    monthNames: string[],
    defaultMonthID: number,
    onSelected: any
}

const SelectMonth = ({monthNames, defaultMonthID, onSelected}: Props) => {

    // Генерируем опции для выбора месяца. Текущий месяц - дефолтный.
    // Когда выбран произвольный месяц, по его id вычисляем имя в monthNamesEn
    // и передаем его в родительский элемент.
    return (
        <select id="month-name" defaultValue={defaultMonthID}
                onChange={(e: any) => onSelected(e)}>
            {monthNames.map((month, index) => <option
                key={index} value={index}>{month}</option>)}
        </select>
    )
}

export default SelectMonth