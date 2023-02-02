// Создаем массив дней недели для месяца
// [Пн, Вт, Ср, ... , Вт]
const getWeekDaysArray = (month: number, year: number = 2023): string[] => {
    const daysInMonth = new Date(2023, month + 1, 0).getDate()

    let weekDay = (day: number) => (
        new Date(2023, month, day).toLocaleString(
            'ru', {weekday: 'short'}
        )
    )

    let weekDays = []
    // Получаем название дня недели для каждой конкретной даты
    for (let i = 1; i < daysInMonth + 1; i++) {
        weekDays.push(weekDay(i))
    }

    return weekDays
}

export default getWeekDaysArray