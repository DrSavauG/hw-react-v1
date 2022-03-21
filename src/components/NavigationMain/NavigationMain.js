import React, {useState} from 'react';
import './style.css';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "../ErrorFallback/ErrorFallback";

const NavigationMain = ({NAVIGATION}) => {
    const [activeGenre, setActiveGenre] = useState(NAVIGATION[0]);

    function doToggle(genre) {
        return activeGenre === genre ? 'genre-active' : '';
    }

    return (
        <ul className={'navigation-main__ul'}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                {NAVIGATION.map((el) => (
                    <li key={el} className={`navigation-main-ul__li ${doToggle(el)}`}
                        onClick={(event) => setActiveGenre(el)}
                    >
                        {el}
                    </li>
                ))}
            </ErrorBoundary>
        </ul>
    );
};

export default NavigationMain;