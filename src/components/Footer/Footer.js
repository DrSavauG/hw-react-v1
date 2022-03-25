import React, {useState} from 'react';
import './style.css';
import Logo from "../Logo/Logo";

const Footer = ({children}) => {
    return (
        <footer>
            <div className={"footer"}>
                {children}
            </div>
        </footer>

    );
};

export default Footer;