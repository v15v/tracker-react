import React from "react";

interface Props {
    footer: {
        title: string,
        subtitle: string,
        copyright: string
    }
}

const Footer = ({footer}: Props) => (
    <section className="section has-background-info">
        <div className="container is-widescreen">
            <p className="is-size-7 has-text-centered has-text-light">
                {footer ? footer.copyright : ""}
            </p>
        </div>
    </section>
)

export default Footer
