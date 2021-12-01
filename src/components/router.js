import React, { createContext, useEffect, useState} from "react";
import Notfound from "../pages/notfound";

let routeContext = createContext({display: {"/": false}, setDisplay:()=>{}});

let AnyRouteHasDisplayed = (display) => {
    for (const [key, value] of Object.entries(display)) {
        if (value === true) {
            return(true)
        }
      }
    return (false);
}


function Router({children}) {
    let [display, setDisplay] = useState({"/": false});
    let [displayNotFound, setDisplayNotFound] = useState(false);

    useEffect(() => setDisplayNotFound(!AnyRouteHasDisplayed(display)), [display]);
    return (
        <routeContext.Provider value={{display, setDisplay}}>
            {children}
            {displayNotFound && <Notfound />}
        </routeContext.Provider>
    );
}
export {routeContext};
export default Router;