import React from 'react';
import './style.css';
import FindYourMovieForm from "./FindYourMovieForm/FindYourMovieForm";
import Button from "./FindYourMovieForm/Button/Button";
import {Link} from "react-router-dom";


const HeaderHome = () => {
    return (
            <div className={'header-home-wrapper'}>
                <Link to={'/add'}>
                    <Button title={"+ add movie"} className={'button button__add-movie'}/>
                </Link>
                <FindYourMovieForm/>
            </div>
    )
};

export default HeaderHome;