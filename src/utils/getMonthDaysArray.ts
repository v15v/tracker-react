import getDoubleDigit from "./doubleDigit";

// Создаем массив дней месяца из двухзначных чисел
// [01, 02, 03, ... , daysInMonth]
const getMonthDaysArray = (daysInMonth: number) => {
    let days = []
    for (let i = 0; i < daysInMonth; i++) {
        let day = getDoubleDigit(i + 1)
        days.push(day)
    }
    return days
}

export default getMonthDaysArray