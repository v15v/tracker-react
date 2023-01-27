import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/bulma/bulma.sass'
import './sass/tracker-app.sass'
import header from './data/header.json'
import footer from './data/footer.json'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import {GetHabits} from "./utils/storage";

let daysInMonth = 31
let habits = GetHabits("january")

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
    <React.StrictMode>
        <Header header={header} />
        <Main habits={habits} daysInMonth={daysInMonth} />
        <Footer footer={footer} />
    </React.StrictMode>
);
