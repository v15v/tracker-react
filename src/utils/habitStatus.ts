interface DayStatusInterface {
    planned: number[],
    done: number[],
    undone: number[],
    day: string
}

// // Устанавливает статус привычки
// const SetHabitStatus = (day: string, dayStatus: string, habit: HabitInterface) => {
//     console.log(day)
//     console.log(dayStatus)
//     console.log(habit)
// }

// Возвращает статус для указанного дня месяца.
// Проверяет в каком из массивов статусов находится указанный день.
const GetDayStatus = ({
                          planned,
                          done,
                          undone,
                          day
                      }: DayStatusInterface): string => {
    if (planned.indexOf(parseInt(day)) >= 0) {
        return "planned"
    } else {
        if (done.indexOf(parseInt(day)) >= 0) {
            return "done"
        } else {
            if (undone.indexOf(parseInt(day)) >= 0) {
                return "undone"
            } else {
                return ""
            }
        }
    }
}

export {GetDayStatus}