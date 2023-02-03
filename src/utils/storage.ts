import {HabitInterface} from "../types/habit"
import axios from "axios"

const UpdateOnBackend = (id: string, habits: HabitInterface[]) => {
    // TODO: корректно обработать ошибку
    axios({
            method: 'patch',
            url: `http://${process.env.REACT_APP_DIRECTUS_HOST}:${process.env.REACT_APP_DIRECTUS_PORT}/items/months/${id}`,
            headers: {'Authorization': `Bearer ${process.env.REACT_APP_DIRECTUS_TOKEN}`},
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
            url: `http://${process.env.REACT_APP_DIRECTUS_HOST}:${process.env.REACT_APP_DIRECTUS_PORT}/items/months`,
            headers: {'Authorization': `Bearer ${process.env.REACT_APP_DIRECTUS_TOKEN}`},
            data: {
                "name": month,
                "habits": []
            }
        }
    )
        .catch(error => console.error(error))
}

export {CreateOnBackend, UpdateOnBackend}