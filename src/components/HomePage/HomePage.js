import React from 'react';
import HeaderHome from "../HeaderHome/HeaderHome";
import Footer from "../Footer/Footer";
import './style.css'
import HeadMain from "../HeadMain/HeadMain";
import MovieList from "../MovieList/MovieList";
import movieLists from "../../utils/movielist";
import NAVIGATION from "../../utils/navigation";
import SORTLISTS from "../../utils/sortlists";

const HomePage = ({children}) => {
    return (
        <div className="App">
            <header>
                <HeaderHome/>
            </header>
            <main>
                <HeadMain NAVIGATION={NAVIGATION} SORTLISTS={{SORTLISTS}}/>
                <MovieList movieLists={movieLists}/>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage;