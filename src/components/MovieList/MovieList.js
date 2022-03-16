import React from 'react';
import './style.css'
import MovieItem from "./MovieItem/MovieItem";

const itemFound = 0;
const movieLists = [
    {
        name: "pulp fiction",
        year: 2004,
        genre: 'action & Adventure',
        url: 'https://resizer.mail.ru/p/f231e9d9-2f9e-5a74-bb77-dff7f31b4eb5/AQACwXo1lp7UpvmbUbLKus0lj0CAGVB9fWSCjPK2hf46UwL298r4aC1cFLq4VUkitsTiW9bgdNE0tZHldKyQ2l4NKTg.jpg'
    },{
        name: "bohemian rhapsody",
        year: 2003,
        genre: 'Drama,Biograghy,Music',
        url: 'https://upload.wikimedia.org/wikipedia/be-x-old/2/2e/Bohemian_Rhapsody_poster.png'
    },
];

const MovieList = () => {
    return (

        <>
            <h3 className={'movie-list-h3'}>{itemFound} movies found</h3>
            <div className={'movie-list'}>
                {movieLists.map((el) => (
                    < MovieItem key={el} data={el}/>
                ))}
            </div>
        </>

    );
};

export default MovieList;