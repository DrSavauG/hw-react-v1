import React, {useContext, useEffect, useState} from 'react';
import './style.css'
import HeaderHome from "../HeaderHome/HeaderHome";
import HeadMain from "../HeadMain/HeadMain";
import MovieList from "../MovieList/MovieList";
import {MyContext} from "../AppRouter/AppRouter";
// import {store} from "../AppRouter/AppRouter";


const HomePage = () => {
const {store} = useContext(MyContext);
    const [movieList, setMovieList] = useState([]);
    const [clickOnFilm, setClickOnFilm] = useState('');
    store.movieList = movieList;
    store.setMovieList = setMovieList;

    function onClickFilm(event,el) {
        event.stopPropagation();
        setClickOnFilm(el)
    }

    store.onClickFilm = onClickFilm;
    useEffect(() => {
        let cleanupFunction = false;

        store.getFilms(store.setMovieList, store.params)//todo for performance
        console.log('refresh HomePage');
        return () => cleanupFunction = true;
    }, []);

    return (
        <div className="App">
            <HeaderHome clickOnFilm={clickOnFilm}/>
            <main>
                <HeadMain/>
                <MovieList>{store.movieList}</MovieList>
            </main>
            </div>
    )
}

export default HomePage;
