import React from 'react';
import './style.css'
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Error = () => {
    return (
        <ErrorBoundary>
        <main className="main-content">
            <section className="main-404">
                <h3 className="main-404__title">Page not found</h3>
                <a className="main-404__link" href='/'>
                    {throw new Error}
                    <p className="main-404__p">Go back and try a different link</p>
                </a>
            </section>
        </main>
        </ErrorBoundary>
    );
};

export default Error;