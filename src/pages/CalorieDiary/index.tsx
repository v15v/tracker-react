import React from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import header from '../../data/header.json'
import footer from '../../data/footer.json'
import CalorieDiary from "../../components/CalorieDiary";

const CalorieDiaryPage = () => {
    return (
        <>
            <Header header={header} />
            <CalorieDiary />
            <Footer footer={footer} />
        </>
    )
}

export default CalorieDiaryPage