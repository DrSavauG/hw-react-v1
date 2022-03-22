import React from 'react';
import {Outlet} from "react-router-dom";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <>
            <header>
                <div className={"logo-wrapper"}>
                    <Logo/>
                </div>
            </header>
                <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;