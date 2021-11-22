import React from "react";

function Route({children, pathname}) {
    return (
        <div>
        {(window.location.pathname === pathname) && children}
        </div>
    );
}

export default Route;