import {HabitInterface} from "../types/habit"
import axios from "axios"

const {host, port, token} = require("../config.json")

const UpdateOnBackend = (id: string, habits: HabitInterface[]) => {
    // TODO: корректно обработать ошибку
    axios({
            method: 'patch',
            url: `http://${host}:${port}/items/months/${id}`,
            headers: {'Authorization': `Bearer ${token}`},
            data: {
                "habits": habits
            }
        }
    )
        .catch(error => console.error(error))
}

const CreateOnBackend = (month: string) => {
    // TODO: корректно обработать ошибку
    axios({
            method: 'post',
            url: `http://${host}:${port}/items/months`,
            headers: {'Authorization': `Bearer ${token}`},
            data: {
                "name": month,
                "habits": []
            }
        }
    )
        .catch(error => console.error(error))
}

export {CreateOnBackend, UpdateOnBackend}