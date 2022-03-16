import React, {useState} from 'react';
import './style.css';

const NAVIGATION = ['all', 'documentary', 'comedy', "horror", 'crime'];


const NavigationMain = () => {

    return (
        <ul className={'navigation-main__ul'}>
            {NAVIGATION.map((el) => (
                <li key={el} className={`navigation-main-ul__li`}
                >
                    {el}
                </li>
            ))}
        </ul>
    );
};

export default NavigationMain;