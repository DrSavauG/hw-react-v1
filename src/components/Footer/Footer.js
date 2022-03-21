import React from 'react';
import './style.css';
import Logo from "../Logo/Logo";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Footer = () => {
    return (
        <ErrorBoundary>
            <div className={"footer"}>
                <Logo/>
            </div>
        </ErrorBoundary>
    );
};

export default Footer;