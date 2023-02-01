import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Tracker from "./Pages/Tracker";
import DashboardPage from "./Pages/Dashboard";
import CalorieDiaryPage from "./Pages/CalorieDiary";
import NotFoundPage from "./Pages/NotFound";


const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Tracker />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/calorie" element={<CalorieDiaryPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)