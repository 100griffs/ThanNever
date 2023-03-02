import React from "react";
import Side from "./Side";
import {Outlet} from "react-router-dom";


 const Layout= ({Link})=> {
    return(
        <>
        <Side className='side' Link={Link}/>
    
        <Outlet/>
        </>
    )
}

export default Layout