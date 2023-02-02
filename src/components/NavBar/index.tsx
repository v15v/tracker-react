import React from 'react'
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <Link to={"/"} className="navbar-item">
                        Tracker
                    </Link>
                    <Link to={"/dashboard"} className="navbar-item">
                        Dashboard
                    </Link>
                    <Link to={"/calorie"} className="navbar-item">
                        CalorieDiary
                    </Link>
                    <Link to={"/login"} className="navbar-item">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NotFound
