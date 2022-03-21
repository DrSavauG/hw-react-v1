import React from 'react';
import Logo from "../Logo/Logo";
import './style.css';
import FindYourMovieForm from "./FindYourMovieForm/FindYourMovieForm";
import Button from "./FindYourMovieForm/Button/Button";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const HeaderHome = () => {
    return (
        <ErrorBoundary>
        <div className={'header-home-wrapper'}>
            <div className={"logo-wrapper"}>
                <Logo/>
            </div>
            <Button title={"+ add movie"} className={'button button__add-movie'}/>
            <FindYourMovieForm/>
        </div>
            <div className={'header-home-bottom-line'}></div>
        </ErrorBoundary>
    );
};

export default HeaderHome;