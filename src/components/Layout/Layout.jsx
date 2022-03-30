import React from 'react';
import {Outlet} from "react-router-dom";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
    return (
        <>
            <Header><Logo/></Header>
            <Outlet/>
            <Footer><Logo/></Footer>
        </>
    )
}

export default Layout;