import React from 'react';
import './style.css'
import MovieItem from "./MovieItem/MovieItem";

const itemFound = 0;
const movieLists = [
    {
        name: "pulp fiction",
        year: 2004,
        genre: 'action & adventure',
        url: 'https://resizer.mail.ru/p/f231e9d9-2f9e-5a74-bb77-dff7f31b4eb5/AQACwXo1lp7UpvmbUbLKus0lj0CAGVB9fWSCjPK2hf46UwL298r4aC1cFLq4VUkitsTiW9bgdNE0tZHldKyQ2l4NKTg.jpg'
    },{
        name: "bohemian rhapsody",
        year: 2003,
        genre: 'Drama,Biograghy,Music',
        url: 'https://upload.wikimedia.org/wikipedia/be-x-old/2/2e/Bohemian_Rhapsody_poster.png'
    },
    {
        name: 'kill bill: vol 2',
        year: 1994,
        genre: 'oscar winning movie',
        url:'https://www.themoviedb.org/t/p/original/bUViX5Ax0fSA4MHxP7yF0xu04Te.jpg'
    },
    {
        name:'avengers: war of infinity',
        year: 2018,
        genre: 'action & adventure',
        url:'https://m.media-amazon.com/images/I/71yPvi+HMiL._AC_SL1000_.jpg'
    },  {
        name:'inception',
        year: 2010,
        genre: 'action & adventure',
        url:'https://live.staticflickr.com/4040/4561225293_088ac3c891_c.jpg'
    },  {
        name:'reservoir dogs',
        year: 1994,
        genre: 'oscar winning movie',
        url:'https://i.pinimg.com/originals/37/11/95/371195df36d12b5735ac2612b6efd81b.png'
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