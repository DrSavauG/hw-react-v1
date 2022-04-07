import React from 'react';
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({children}) => {
    return (
        <>
            <Header><Logo/></Header>
            {children}
            <Footer><Logo/></Footer>
        </>
    )
}

export default Layout;