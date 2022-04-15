import React, {useContext, useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "../ErrorFallback/ErrorFallback";
import './style.css';
import {MyContext} from "../AppRouter/AppRouter";

const NavigationMain = () => {
    const {store} = useContext(MyContext);
    const [activeGenre, setActiveGenre] = useState(store.NAVIGATION[0]);
    store.activeGenre = activeGenre;
    store.setActiveGenre = setActiveGenre;

    function doToggle(genre) {
        return activeGenre === genre ? 'genre-active' : '';
    }

    const onClick = (el) => {
        const params = {
            find: {"_deletedAt": null, "genre": el}
        };

        if (el === 'all') {
            params.find = {"_deletedAt": null}
        }
        store.params = params;
        store.getFilms(store.setMovieList, store.params).then(setActiveGenre(el));
    }

    return (
        <ul className={'navigation-main__ul'}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                {store.NAVIGATION.map((el) => (
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