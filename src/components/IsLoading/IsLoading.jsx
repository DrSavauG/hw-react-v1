import React from 'react';

const IsLoading = (props) => {
    return (
        <div className="App">
            <main>
                {props.children}
            </main>
        </div>
    );
};

export default IsLoading;