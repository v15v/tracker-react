import React from "react"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import header from '../../data/header.json'
import footer from '../../data/footer.json'
import NotFound from "../../components/NotFound";

const NotFoundPage = () => {
    return (
        <>
            <Header header={header} />
            <NotFound />
            <Footer footer={footer} />
        </>
    )
}

export default NotFoundPage