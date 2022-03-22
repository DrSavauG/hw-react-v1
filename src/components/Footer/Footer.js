import React, {useState} from 'react';
import './style.css';
import Logo from "../Logo/Logo";

const Footer = () => {
    return (
        <footer>
            <div className={"footer"}>
                <Logo/>
            </div>
        </footer>

    );
};

export default Footer;