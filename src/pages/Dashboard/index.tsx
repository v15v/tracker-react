import React from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import header from '../../data/header.json'
import footer from '../../data/footer.json'
import Dashboard from "../../components/Dashboard";

const DashboardPage = () => {
    return (
        <>
            <Header header={header} />
            <Dashboard />
            <Footer footer={footer} />
        </>
    )
}

export default DashboardPage