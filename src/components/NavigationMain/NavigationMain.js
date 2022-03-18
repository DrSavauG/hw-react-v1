import React, {useState} from 'react';
import './style.css';

const NAVIGATION = ['all', 'documentary', 'comedy', "horror", 'crime'];

const NavigationMain = () => {
const [activeGenre,setActiveGenre] = useState(NAVIGATION[0]);

function doToggle(genre){
return activeGenre === genre ?  'genre-active':'';
}

    return (
        <ul className={'navigation-main__ul'}>
            {NAVIGATION.map((el) => (
                <li key={el} className={`navigation-main-ul__li ${doToggle(el)}`}
                    onClick={(event)=>setActiveGenre(el)}
                >
                    {el}
                </li>
            ))}
        </ul>
    );
};

export default NavigationMain;