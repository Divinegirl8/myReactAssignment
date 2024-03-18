import Navbar from "../reusables/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../reusables/Footer";

const Layout = () =>{
    return(
        <>
        <Navbar/>
         <Outlet/>
         <Footer/>
        </>
    )
}

export default Layout