import React from 'react';
import Footer from "../Footer/Footer";
import './style.css'
import Logo from "../Logo/Logo";

const HomePage = () => {
    return (
        <>
            <header>
                <div className={"logo-wrapper"}>
                    <Logo/>
                </div>
            </header>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default HomePage;