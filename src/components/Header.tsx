import React from "react";

interface Props {
    header: {
        title: string,
        subtitle: string
    }
}

const Header = ({header}: Props) => (
    <section className="hero is-info is-medium">
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
    </section>
)

export default Header