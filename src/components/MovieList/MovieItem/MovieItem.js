import React from 'react';
import './style.css';

const MovieItem = (props) => {
    return (
        <div className={'movie-item'}>
            <img className={'movie-item__poster'} alt={props.data.name} src={props.data.url}/>
            <div className={"movie-item__data"}>
                <div>
                    <div className={'data-name'}>{props.data.name}</div>
                    <div className={'data-genre'}>{props.data.genre}</div>
                </div>
            <div className={'data-year'}>{props.data.year}</div>
            </div>
        </div>
    )
        ;
};

export default MovieItem;