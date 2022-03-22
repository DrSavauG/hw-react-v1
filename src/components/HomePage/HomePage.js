import React from 'react';
import './style.css'
import HeaderHome from "../HeaderHome/HeaderHome";
import HeadMain from "../HeadMain/HeadMain";
import NAVIGATION from "../../utils/navigation";
import SORTLISTS from "../../utils/sortlists";
import MovieList from "../MovieList/MovieList";
import movieLists from "../../utils/movielist";

const HomePage = () => {
    return (
        <>
            <div className="App">
                <HeaderHome/>
                <main>
                    <HeadMain NAVIGATION={NAVIGATION} SORTLISTS={{SORTLISTS}}/>
                    <MovieList movieLists={movieLists}/>
                </main>
            </div>
        </>
    )
}

export default HomePage;