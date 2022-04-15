import React, {useContext} from 'react';
import './style.css'
import NavigationMain from "../NavigationMain/NavigationMain";
import SortBy from "../SortBy/SortBy";
import {MyContext} from "../AppRouter/AppRouter";




const HeadMain = () => {
    return (
        <div className={'main-header'}>
            <NavigationMain/>
            <SortBy/>
        </div>
    );
};

export default HeadMain;