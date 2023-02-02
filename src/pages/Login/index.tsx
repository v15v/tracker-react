import React from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import header from '../../data/header.json'
import footer from '../../data/footer.json'
import Login from "../../components/Login";

interface Props {
    setToken: (f: any) => void
}

const LoginPage = ({setToken}: Props) => {
    return (
        <>
            <Header header={header} />
            <Login setToken={setToken} />
            <Footer footer={footer} />
        </>
    )
}

export default LoginPage