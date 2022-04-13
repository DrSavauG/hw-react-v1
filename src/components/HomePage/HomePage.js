import React, {useEffect, useState} from 'react';
import './style.css'
import HeaderHome from "../HeaderHome/HeaderHome";
import HeadMain from "../HeadMain/HeadMain";
import MovieList from "../MovieList/MovieList";
import {store} from "../AppRouter/AppRouter";
import {logDOM} from "@testing-library/react";

const HomePage = () => {
    const [movieList, setMovieList] = useState([]);
    store.movieList = movieList;
    store.setMovieList = setMovieList;
    useEffect(() => {
            store.getFilms(store.setMovieList,{_deletedAt: null} )
    }, []);

    return (
            <div className="App">
                <HeaderHome/>
                <main>
                    <HeadMain/>
                    <MovieList>{movieList}</MovieList>
                </main>
            </div>
    )
}

export default HomePage;
