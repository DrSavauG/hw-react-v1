import React from 'react';
import logo from '../../assets/icons/netflixroulette.svg';
import './style.css';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "../Error/ErrorFallback/ErrorFallback";


const Logo = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <img className={"logo"} alt={"netflixroulet"} src={logo}/>
        </ErrorBoundary>
    );
};

export default Logo;