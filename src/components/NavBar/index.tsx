import React from 'react'
import {Link} from "react-router-dom";
import styles from './NavBar.module.sass'

const NavBar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            </div>
            <div className="navbar-menu">
                <div className={styles.navbarEnd}>
                    <Link to={"/"} className="navbar-item">
                        Tracker
                    </Link>
                    <Link to={"/dashboard"} className="navbar-item">
                        Dashboard
                    </Link>
                    <Link to={"/calorie"} className="navbar-item">
                        CalorieDiary
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
