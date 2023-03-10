import React from "react";
import styles from "./Header.module.sass"
import NavBar from "../NavBar";

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
        <NavBar />
    </section>
)

export default Header