import React, {useState} from 'react';
import './style.css';
import Logo from "../Logo/Logo";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "../Error/ErrorFallback/ErrorFallback";

function Bomb(){

}
const Footer = () => {
    return (
            <div className={"footer"}>
                <Logo/>
            </div>
    );
};

export default Footer;