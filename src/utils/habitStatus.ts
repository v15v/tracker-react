import {HabitInterface} from "../types/habit";

interface DayStatusInterface {
    planned: number[],
    done: number[],
    undone: number[],
    day: string
}

// // Устанавливает статус привычки
const SetHabitStatus = (day: string, dayStatus: string, habit: HabitInterface, setHabits: any, habits: HabitInterface[], setSaveToBackend: any) => {
    setSaveToBackend(true)
    let newHabits: HabitInterface[]
    switch (dayStatus) {
        case "free":
            habit.planned.push(parseInt(day))
            const targetHabit = habits.filter(h => h.name === habit.name)[0]
            targetHabit.planned = habit.planned
            newHabits = [...habits]
            setHabits(newHabits)
            break;
        case "planned":
            habit.planned = habit.planned.filter((d) => d !== parseInt(day))
            habit.done.push(parseInt(day))
            newHabits = [...habits]
            setHabits(newHabits)
            break;
        case "done":
            habit.done = habit.done.filter((d) => d !== parseInt(day))
            habit.undone.push(parseInt(day))
            newHabits = [...habits]
            setHabits(newHabits)
            break;
        case "undone":
            habit.undone = habit.undone.filter((d) => d !== parseInt(day))
            newHabits = [...habits]
            setHabits(newHabits)
            break;
        default:
            console.warn("Некорректный статус дня:", dayStatus)
    }
}

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
                return "free"
            }
        }
    }
}

export {GetDayStatus, SetHabitStatus}