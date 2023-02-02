import React from "react"
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

import header from '../../data/header.json'
import footer from '../../data/footer.json'

const Tracker = () => {
    return (
        <>
            <Header header={header} />
            <Main />
            <Footer footer={footer} />
        </>
    )
}

export default Tracker