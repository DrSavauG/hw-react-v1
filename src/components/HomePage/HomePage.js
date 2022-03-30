import React from 'react';
import './style.css'
import HeaderHome from "../HeaderHome/HeaderHome";
import HeadMain from "../HeadMain/HeadMain";
import MovieList from "../MovieList/MovieList";

const HomePage = ({children}) => {
    return (
            <div className="App">
                <HeaderHome/>
                <main>
                    <HeadMain/>
                    <MovieList>{children}</MovieList>
                </main>
            </div>
    )
}

export default HomePage;