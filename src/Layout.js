import React from "react";
import Side from "./Side";
import {Outlet} from "react-router-dom";

 const Layout= ({FaSearch,Link})=> {
    return(
        <>
        <Side  FaSearch={FaSearch} className='side' Link={Link}/>
        <Outlet/>
        </>
    )
}

export default Layout