import React, {useContext, useState} from 'react';
import './style.css';
import FindYourMovieForm from "./FindYourMovieForm/FindYourMovieForm";
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import {MyContext} from "../AppRouter/AppRouter";
import FilmBig from "../FilmBig/FilmBig";

const HeaderHome = (props) => {
    const {store} = useContext(MyContext);
    return (
        <>
            {props.clickOnFilm._id ?
                    <FilmBig className={'header-home-film'} >{props.clickOnFilm}</FilmBig>
                :
                <div className={'header-home-wrapper'}>
                    <Link to={'/add'}>
                        <Button title={"+ add movie"} className={'button button__add-movie'}/>
                    </Link>
                    <Button onClick={() => store.logout()} title={'log out'}
                            className={'button button__add-movie button-logout'}> </Button>
                    <FindYourMovieForm/>
                </div>}
        </>
    )
};

export default HeaderHome;