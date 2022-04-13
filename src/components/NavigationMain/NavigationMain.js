import React, {useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "../ErrorFallback/ErrorFallback";
import './style.css';
import {store} from "../AppRouter/AppRouter";

const NavigationMain = ({children}) => {
    const [activeGenre, setActiveGenre] = useState(children[0]);

    function doToggle(genre) {
        return activeGenre === genre ? 'genre-active' : '';
    }
    const onClick =(el)=>{
        if(el=='all'){
            el = [];
        }
        const params = {
            "_deletedAt": null,
            "genre": el
        };
        store.getFilms(store.setMovieList, params).then( setActiveGenre(el));
    }

    return (
        <ul className={'navigation-main__ul'}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                {React.Children.map(children, (el) => (
                    <li key={el} className={`navigation-main-ul__li ${doToggle(el)}`}
                        onClick={(event) => onClick(el)}
                    >
                        {el}
                    </li>
                ))}
            </ErrorBoundary>
        </ul>
    );
};

export default NavigationMain;
