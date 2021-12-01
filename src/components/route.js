import React, { useContext, useEffect, useState } from "react";
import { routeContext } from "./router";

function Route({children, pathname}) {

    let {setDisplay} = useContext(routeContext);
    let [routeDisplay, setRouteDisplay] = useState(false);

    useEffect(() => setDisplay((prevDisplay) => { 
        prevDisplay[pathname] = routeDisplay; 
        return prevDisplay; 
    }), [pathname,setDisplay, routeDisplay]);
    if (window.location.pathname === pathname) {
        if (!routeDisplay) {
            setRouteDisplay(true);
        }
        return (
            <>
                {children}
            </>
        );
    }
    return(
        <></>
    )
}

export default Route;