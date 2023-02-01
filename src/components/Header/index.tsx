import React from "react";
import styles from "./Header.module.sass"
import {Link} from "react-router-dom";

interface Props {
    header: {
        title: string,
        subtitle: string
    }
}

const Header = ({header}: Props) => (
    <section className={`hero is-info ${styles.isMedium}`}>
        <div className="hero-body">
            <div className="container is-widescreen">
                <p className="title">
                    {header ? header.title : ""}
                </p>
                <p className="subtitle">
                    {header ? header.subtitle : ""}
                </p>
            </div>
        </div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            </div>
            <div className="navbar-menu">
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
        </nav>
    </section>
)

export default Header