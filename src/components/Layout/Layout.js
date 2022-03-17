import React from 'react';
import HeaderHome from "../HeaderHome/HeaderHome";
import Footer from "../Footer/Footer";
import './style.css'
import HeadMain from "../HeadMain/HeadMain";
import MovieList from "../MovieList/MovieList";


const Layout = ({children}) => {
    return (
        <div className="App">
            <header>
                <HeaderHome/>
            </header>
            <main>
                <HeadMain/>
                <MovieList/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;