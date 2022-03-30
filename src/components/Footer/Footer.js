import React from 'react';
import './style.css';

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