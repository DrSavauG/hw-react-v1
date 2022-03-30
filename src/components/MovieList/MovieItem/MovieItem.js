import React from 'react';
import './style.css';

const MovieItem = ({children}) => {
    const {name, url, genre, year} = children;
    return (
        <div className={'movie-item'}>
            <img className={'movie-item__poster'} alt={name} src={url}/>
            <div className={"movie-item__data"}>
                <div>
                    <div className={'data-name'}>{name}</div>
                    <div className={'data-genre'}>{genre}</div>
                </div>
                <div className={'data-year'}>{year}</div>
            </div>
        </div>
    )
        ;
};

export default MovieItem;