import {HabitInterface} from "../types/habit";

const GetHabits = (month: string) => {
    // Пробуем загрузить данные из локального хранилища
    const monthJSONString = localStorage.getItem(month)

    // Количество дней в текущем месяце
    // Если из локального хранилища получены данные
    if (typeof monthJSONString === "string") {
        // Преобразуем строку JSON в объект
        let monthJSON = JSON.parse(monthJSONString)
        // Для каждой привычки из хранилища генерируем новую привычку типа Habit
        // и добавляем ее в наш месяц.
        // Если просто передать все эти привычки нашему месяцу, их тип не будет Habit,
        // а следовательно они не будут поддерживать методов нашего класса Habit.
        // TODO: Спросить верно ли я понял этот момент?
        // monthJSON.habits.forEach(habit => {
        //     let habitToRestore = new Habit({
        //         name: habit.name,
        //         planned: habit.planned,
        //         done: habit.done,
        //         undone: habit.undone
        //     })
        //     month.addHabit(habitToRestore)
        // })
        console.log(monthJSON)

        return monthJSON
    }

    return [
        {
            "id": "e8d9af10-8368-41e4-ab44-3b1ad91cbe81",
            "name": "Habit 1",
            "planned": [1, 5],
            "done": [7, 10],
            "undone": [23, 27]
        },
        {
            "id": "e8d9af10-8368-41e4-ab44-3b1ad91cbe82",
            "name": "Habit 2",
            "planned": [1, 5],
            "done": [7, 10],
            "undone": [23, 27]
        }
    ]
}

// Сохраняем состояние месяца в локальное хранилище
const SaveToLocalStorage = (name: string, data: HabitInterface[]) => {
    localStorage.setItem(name, JSON.stringify(data))
}

export {GetHabits, SaveToLocalStorage}