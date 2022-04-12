import React from 'react';
import './style.css'
import MovieItem from "./MovieItem/MovieItem";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "../ErrorFallback/ErrorFallback";

const MovieList = (props) => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <h3 className={'movie-list-h3'}>{props.children.length} movies found</h3>
            {props.children.length?
            <div className={'movie-list'}>
                {props.children.map((el) => (
                    <MovieItem key={el._id}>{el}</MovieItem>
                ))}
            </div>:<div className={"plugin"}>nothing found</div>}
        </ErrorBoundary>

    );
};

export default MovieList;