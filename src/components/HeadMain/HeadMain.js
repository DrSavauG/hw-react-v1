import React from 'react';
import './style.css'
import NavigationMain from "../NavigationMain/NavigationMain";
import SortBy from "../SortBy/SortBy";

const HeadMain = ({SORTLISTS,NAVIGATION}) => {
    return (
        <div className={'main-header'}>
            <NavigationMain NAVIGATION={NAVIGATION}/>
            <SortBy SORTLISTS={SORTLISTS}/>
        </div>
    );
};

export default HeadMain;