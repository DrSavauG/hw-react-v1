import React from 'react';
import './style.css';

const MovieItem = ({children}) => {
    const {title, url, genre, release_date, runtime, _id, overview, rating} = children;
    return (
        <div className={'movie-item'} id={_id}>
            <img className={'movie-item__poster'} alt={title} src={url}/>
            <div className={"movie-item__data"}>
                <div>
                    <div className={'data-name'}>{title}</div>
                    <div className={'data-genre'}>{genre.map(el => el)}</div>
                </div>
                <div className={'data-year'}>{release_date.slice(0, 4)}</div>
            </div>
        </div>
    );
};

export default MovieItem;