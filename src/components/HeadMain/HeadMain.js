import React, {useContext} from 'react';
import './style.css'
import NavigationMain from "../NavigationMain/NavigationMain";
import SortBy from "../SortBy/SortBy";
import {MyContext} from "../../App";




const HeadMain = () => {
    const {NAVIGATION,SORTLISTS} =useContext(MyContext).store;
    return (
        <div className={'main-header'}>
            <NavigationMain>{NAVIGATION}</NavigationMain>
            <SortBy>{SORTLISTS}</SortBy>
        </div>
    );
};

export default HeadMain;