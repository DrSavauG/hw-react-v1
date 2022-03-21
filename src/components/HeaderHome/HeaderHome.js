import React from 'react';
import Logo from "../Logo/Logo";
import './style.css';
import FindYourMovieForm from "./FindYourMovieForm/FindYourMovieForm";
import Button from "./FindYourMovieForm/Button/Button";


const HeaderHome = () => {
    return (
        <>
            <div className={'header-home-wrapper'}>
                <Button title={"+ add movie"} className={'button button__add-movie'}/>
                <FindYourMovieForm/>
            </div>
            <div className={'header-home-bottom-line'}></div>
        </>
    )
};

export default HeaderHome;