import React, {useState} from 'react';
import './style.css';
import EditMenu from "../../EditMenu/EditMenu";

const MovieItem = ({children}) => {
    const {title, url, genre, release_date, runtime, _id, overview, rating} = children;

    return (
        <div className={'movie-item'} >
            <img className={'movie-item__poster'} alt={title} src={url}/>
            <div className={"movie-item__data"}>
                <div>
                    <div className={'data-name'}>{title}</div>
                    <div className={'data-genre'}>{genre.map(el => el+' ')}</div>
                </div>
                <div className={'data-year'}>{release_date.slice(0, 4)}</div>
            </div>
            <EditMenu className={"edit-menu"} filmData ={children} />
        </div>
    );
};

export default MovieItem;