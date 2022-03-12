import React from 'react';
import Logo from "../Logo/Logo";
import './style.css';

const HeaderHome = () => {
    return (
        <>
        <div className={'header-home-wrapper'}>
            <div className={"logo-wrapper"}>
                <Logo/>
                header-content
            </div>
        </div>
            <div className={'header-home-bottom-line'}></div>
        </>
    );
};

export default HeaderHome;