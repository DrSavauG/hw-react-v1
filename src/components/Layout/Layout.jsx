import React from 'react';
import HeaderHome from "../HeaderHome/HeaderHome";
import Footer from "../Footer/Footer";
import {Outlet} from "react-router-dom";
import Logo from "../Logo/Logo";

const Layout = () => {
    return (
        <>
            <header>
                <div className={"logo-wrapper"}>
                    <Logo/>
                </div>
            </header>
                <Outlet/>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout;