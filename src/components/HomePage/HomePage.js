import React, {useEffect, useState} from 'react';
import './style.css'
import HeaderHome from "../HeaderHome/HeaderHome";
import HeadMain from "../HeadMain/HeadMain";
import MovieList from "../MovieList/MovieList";
import {store} from "../AppRouter/AppRouter";
import Films from '../../utils/movielist.json';
function isImage(el) {
    var resultCheck = true;
    var image = document.createElement('img');
    image.src = el.poster_path;
    image.onerror = function () {
        var resultCheck = false;
    };
    return resultCheck;
}

    console.log(isImage(Films[0]));
const HomePage = () => {




    const [movieList, setMovieList] = useState([]);
    store.movieList = movieList;
    store.setMovieList = setMovieList;
    useEffect(() => {
        store.getFilms(store.setMovieList, {find: {_deletedAt: null}, sort: {title: 1}})
        // store.getFilms(store.setMovieList,{} )//all with deleted
    }, []);

    return (
            <div className="App">
                <HeaderHome/>
                <main>
                    <HeadMain/>
                    <MovieList>{store.movieList}</MovieList>
                </main>
            </div>
    )
}

export default HomePage;
