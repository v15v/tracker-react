import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Tracker from "./pages/Tracker";
import DashboardPage from "./pages/Dashboard";
import CalorieDiaryPage from "./pages/CalorieDiary";
import NotFoundPage from "./pages/NotFound";
import LoginPage from "./pages/Login";
import useToken from "./hooks/useToken";


const App = () => {
    const {token, setToken} = useToken()

    if (!token) {
        return (
            <LoginPage setToken={setToken} />
        )
    }

    return (
        <Routes>
            <Route path="/" element={<Tracker />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/calorie" element={<CalorieDiaryPage />} />
            <Route path="/login" element={<LoginPage setToken={setToken} />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)