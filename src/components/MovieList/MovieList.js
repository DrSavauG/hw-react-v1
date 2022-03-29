import React from 'react';
import './style.css'
import MovieItem from "./MovieItem/MovieItem";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "../ErrorFallback/ErrorFallback";

const MovieList = ({children}) => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <h3 className={'movie-list-h3'}>{children.length} movies found</h3>
            <div className={'movie-list'}>
                {children.map((el) => (
                    <MovieItem key={el.name} data={el}/>
                ))}
            </div>
        </ErrorBoundary>

    );
};

export default MovieList;