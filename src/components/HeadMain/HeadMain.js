import React from 'react';
import './style.css'
import NavigationMain from "../NavigationMain/NavigationMain";
import SortBy from "../SortBy/SortBy";

const HeadMain = (props) => {
    return (
        <div className={'main-header'}>
            <NavigationMain NAVIGATION={props.NAVIGATION}/>
            <SortBy SORTLISTS={props.SORTLISTS}/>
        </div>
    );
};

export default HeadMain;