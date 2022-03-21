import React from 'react';
import './style.css';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "../../../Error/ErrorFallback/ErrorFallback";

const Button = ({title, className}) => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <button type={'button'} className={className}>{title}</button>
        </ErrorBoundary>

    );
};

export default Button;