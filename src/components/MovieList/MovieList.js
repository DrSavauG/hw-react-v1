import React from 'react';
import './style.css'
import MovieItem from "./MovieItem/MovieItem";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "../ErrorFallback/ErrorFallback";

const MovieList = (props) => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <h3 className={'movie-list-h3'}>{props.movieLists.length} movies found</h3>
            <div className={'movie-list'}>
                {props.movieLists.map((el) => (
                    <MovieItem key={el.name} data={el}/>
                ))}
            </div>
        </ErrorBoundary>

    );
};

export default MovieList;