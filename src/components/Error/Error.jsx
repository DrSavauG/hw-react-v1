import React from 'react';
import './style.css'
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "../Error/ErrorFallback/ErrorFallback";

const Error = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} >
        <main className="main-content">
            <section className="main-404">
                <h3 className="main-404__title">Page not found</h3>
                <a className="main-404__link" href='/'>
                    <p className="main-404__p">Go back and try a different link</p>
                </a>
            </section>
        </main>
        </ErrorBoundary>
    );
};

export default Error;