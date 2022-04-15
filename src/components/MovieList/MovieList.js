import React, {useContext} from 'react';
import './style.css'
import MovieItem from "./MovieItem/MovieItem";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "../ErrorFallback/ErrorFallback";
import {MyContext} from "../AppRouter/AppRouter";

const MovieList = (props) => {
    const {store} = useContext(MyContext);
    function onclickDiv(event){
        event.stopPropagation();
        store.onClickFilm(event,{})
    }

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <h3 className={'movie-list-h3'}>{props.children.length} movies found</h3>
            {props.children.length?
            <div className={'movie-list'} onClick={(event)=>onclickDiv(event)}>
                {props.children.map((el) => (
                    <MovieItem onClick={(event)=>store.onClickFilm(event,el)} key={el._id}>{el}</MovieItem>
                ))}
            </div>:<div className={"plugin"}>nothing found</div>}
        </ErrorBoundary>

    );
};

export default MovieList;