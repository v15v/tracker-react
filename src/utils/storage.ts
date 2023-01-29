import {HabitInterface} from "../types/habit"
import axios from "axios"
import {json} from "stream/consumers";

const GetDataAxios = (url: string, setHabits: any) => {
    // GET request for remote image in node.js
    axios({
        method: 'get',
        url: url,
        responseType: 'json',
        responseEncoding: 'utf8',
        headers: {'Authorization': 'Bearer NT1ETf1uUeAkbmsoDd7EzUJghk1LpmmS'}
    })
        .then(({data}) => {
            console.log(data.data[0].habits)
        })
}

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

// Сохраняем состояние месяца в локальное хранилище
const SaveToBackend = (name: string, data: HabitInterface[]) => {
    localStorage.setItem(name, JSON.stringify(data))
}

// TODO: реализовать методы
const updateOnBackend = () => {
}
const createOnBackend = () => {
}
const deleteOnBackend = () => {
}

export {GetHabits, SaveToLocalStorage, GetDataAxios, SaveToBackend}