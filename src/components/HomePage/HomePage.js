import React, {useEffect, useState} from 'react';
import './style.css'
import HeaderHome from "../HeaderHome/HeaderHome";
import HeadMain from "../HeadMain/HeadMain";
import MovieList from "../MovieList/MovieList";
import {store} from "../AppRouter/AppRouter";

const HomePage = () => {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
            store.getFilms(setMovieList);
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
