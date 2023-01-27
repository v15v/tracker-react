import {HabitInterface} from "../types/habit";

const GetHabits = (month: string) => {
    // Пробуем загрузить данные из локального хранилища
    const monthJSONString = localStorage.getItem(month)

    // Если из локального хранилища получены данные
    if (typeof monthJSONString === "string") {
        // Преобразуем строку JSON в объект
        return JSON.parse(monthJSONString)
    }

    // Если данный в хранилище нет, возвращаем пустой массив
    return []
}

// Сохраняем состояние месяца в локальное хранилище
const SaveToLocalStorage = (name: string, data: HabitInterface[]) => {
    localStorage.setItem(name, JSON.stringify(data))
}

export {GetHabits, SaveToLocalStorage}