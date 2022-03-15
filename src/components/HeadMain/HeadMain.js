import React from 'react';
import './style.css'
import NavigationMain from "../NavigationMain/NavigationMain";
import SortBy from "../SortBy/SortBy";

const HeadMain = () => {
    return (
        <div className={'head-main'}>
            HeadMain
            <NavigationMain/>
            <SortBy/>
        </div>
    );
};

export default HeadMain;