import React, {useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "../ErrorFallback/ErrorFallback";
import './style.css';

const NavigationMain = ({children}) => {
    const [activeGenre, setActiveGenre] = useState(children[0]);

    function doToggle(genre) {
        return activeGenre === genre ? 'genre-active' : '';
    }

    return (
        <ul className={'navigation-main__ul'}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                {React.Children.map(children, (el) => (
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