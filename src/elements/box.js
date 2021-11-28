import React from "react";

function Box({ children, height=true, hoverable=false, background="" }) {
    let classNames = "box";
    if (height) {
        classNames += " heightMax";
    }
    if (hoverable) {
        classNames += " hoverable";
    }
    if (background !== "") {
        classNames += (" has-background-" + background)
    }
    return (
        <div className={classNames}>
            <div className="columns">
                {children}
            </div>
        </div>
    );
}

function BoxContent({ children }) {
    return(
        <div className="column">
            {children}
        </div>
    );
}

function BoxTitle({ title , family=false }) {
    let classNames="title is-4 centered-content";
    if (family) {
        classNames += " is-family-secondary"
    }
    return(
        <div className="content">
            <p className={classNames}>{title}</p>
        </div>
    );
}

function BoxImage({ size = "", src, alt }) {
    return (
        <figure className={"image " + size}>
            <img src={src} alt={alt} />
        </figure>
    );
}

function BoxIcon({ icon }) {
    return(
        <div className="content centered-content">
            <span className="icon">
                    <i className={`fas ${icon} fa-3x is-flex`}></i>
            </span>
        </div>

    );
}

function BoxParagraph({ children }) {
    return(
        <div className="content centered-content">
            {children}
        </div>
    );
}

export { Box, BoxContent, BoxTitle, BoxImage, BoxIcon, BoxParagraph, };
export default Box;