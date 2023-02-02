import React from 'react'
import styles from './Login.module.sass'
import axios from "axios";

const {host, port, token} = require("../../config.json")

interface Props {
    setToken: (f: any) => void
}

interface Credentials {
    username: string
    password: string
}

const loginUser = async ({username, password}: Credentials) => {
    const userData = await axios({
        method: 'get',
        url: `http://${host}:${port}/items/users?fields=password,token&filter[username][_eq]=${username}`,
        headers: {'Authorization': `Bearer ${token}`}
    })
        .then(({data}) => {
            return data.data[0]
        })

    if (userData?.password === password) {
        return userData.token
    }
}

const Login = ({setToken}: Props) => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const userToken = await loginUser({
            username,
            password
        });
        setToken(userToken);
    }

    return (
        <section className="section">
            <div className={`${styles.containerLogin}`}>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input className="input" type="text"
                                   placeholder=""
                                   onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password"
                                   placeholder=""
                                   onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="control">
                        <button className="button is-info">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login