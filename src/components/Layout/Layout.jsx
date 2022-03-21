import React from 'react';
import HeaderHome from "../HeaderHome/HeaderHome";
import {Outlet} from "react-router-dom";
import HeadMain from "../HeadMain/HeadMain";
import NAVIGATION from "../../utils/navigation";
import SORTLISTS from "../../utils/sortlists";
import MovieList from "../MovieList/MovieList";
import movieLists from "../../utils/movielist";

const Layout = () => {
    return (
            <div className="App">
                <HeaderHome/>
                <main>
                    <HeadMain NAVIGATION={NAVIGATION} SORTLISTS={{SORTLISTS}}/>
                    <MovieList movieLists={movieLists}/>
                </main>
            <Outlet/>
            </div>
    )
}

export default Layout;