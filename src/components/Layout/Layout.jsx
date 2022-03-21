import React from 'react';
import HeaderHome from "../HeaderHome/HeaderHome";
import Footer from "../Footer/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="App">
            <header>
                <HeaderHome/>
            </header>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;