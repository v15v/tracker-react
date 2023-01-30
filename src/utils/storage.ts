import {HabitInterface} from "../types/habit"
import axios from "axios"

const myConf = require("../config.json")

const UpdateOnBackend = (id: string, habits: HabitInterface[]) => {
    // TODO: корректно обработать ошибку
    axios({
            method: 'patch',
            url: `http://${myConf.host}:${myConf.port}/items/months/${id}`,
            headers: {'Authorization': 'Bearer NT1ETf1uUeAkbmsoDd7EzUJghk1LpmmS'},
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
            url: `http://${myConf.host}:${myConf.port}/items/months`,
            headers: {'Authorization': 'Bearer NT1ETf1uUeAkbmsoDd7EzUJghk1LpmmS'},
            data: {
                "name": month,
                "habits": []
            }
        }
    )
        .catch(error => console.error(error))
}

export {CreateOnBackend, UpdateOnBackend}