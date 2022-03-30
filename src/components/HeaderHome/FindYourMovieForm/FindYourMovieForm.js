import React from 'react';
import './style.css';
import Button from "./Button/Button";

const FindYourMovieForm = () => {
    return (
            <div className={'find-you-movie'}>
                <label className={'find-you-movie__title'} htmlFor={'find-you-movie__input'}>
                    Find your movie
                    <div className={'find-you-movie__form'}>
                        <input className={'find-you-movie__input'} type={'text'} placeholder={'What do you want to watch?'}/>
                        <Button title={"search"} className={'button button__search'}/>
                    </div>
                </label>
            </div>
    );
};

export default FindYourMovieForm;