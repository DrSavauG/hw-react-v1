import React, {useContext} from 'react';
import './style.css';
import search from '../../assets/icons/SearchButton.svg'
import {useNavigate} from "react-router";
import {MyContext} from "../AppRouter/AppRouter";

const FilmBig = (props) => {
    const {store} = useContext(MyContext);
    const {title, url, genre, release_date, runtime, _id, overview, rating} = props.children;
    return (
        <div className={props.className} >
            <img className={'film-big--poster'} alt={title} src={url}/>
            <div className={"film-big--data"}>
                <div className={"film-big--additional-top"}>
                    <h2 className={'film-big--data__title'}>{title}</h2>
                    <div className={'film-big--data__rating'}>{rating}</div>
                </div>

                <p className={'film-big--data__genre'}>{genre.map(el => el+' ')}</p>
                <div className={"film-big--additional"}>
                    <time className={'film-big--data__year'}>{release_date.slice(0,4)}</time>
                    <time className={'film-big--data__runtime'}>{runtime} min</time>
                </div>
                <p className={'film-big--data__overview'}>{overview}</p>
            </div>
            <img  onClick={(e)=>store.onClickFilm(e,{})} className={'film-big--search'} src={search}
                 alt={'click to context menu'}/>
        </div>
    );
};
export default FilmBig;