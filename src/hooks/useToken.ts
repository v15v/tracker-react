import {useState} from 'react';

const useToken = () => {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        return tokenString
    }
    const [token, setToken] = useState(getToken());

    const saveToken = (userToken: string) => {
        localStorage.setItem('token', userToken)
        setToken(userToken)
    }

    return {
        setToken: saveToken,
        token
    }
}

export default useToken