import React, {useState} from 'react';
import './style.css';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const NavigationMain = (props) => {
    const [activeGenre, setActiveGenre] = useState(props.NAVIGATION[0]);

    function doToggle(genre) {
        return activeGenre === genre ? 'genre-active' : '';
    }

    return (
        <ErrorBoundary>
            <ul className={'navigation-main__ul'}>
                {props.NAVIGATION.map((el) => (
                    <li key={el} className={`navigation-main-ul__li ${doToggle(el)}`}
                        onClick={(event) => setActiveGenre(el)}
                    >
                        {el}
                    </li>
                ))}
            </ul>
        </ErrorBoundary>
    );
};

export default NavigationMain;