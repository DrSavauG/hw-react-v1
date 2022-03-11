import React from 'react';
import HeaderHome from "../HeaderHome/HeaderHome";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
    return (
        <>

            <header><HeaderHome/></header>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout;