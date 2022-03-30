import React from 'react';

const Header = ({children}) => {
    return (
        <header>
            <div className={"logo-wrapper"}>
                {children}
            </div>
        </header>
    );
};

export default Header;