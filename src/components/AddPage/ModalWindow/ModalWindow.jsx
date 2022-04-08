import React from 'react';

const ModalWindow = (props) => {
    const {title,children} = props;
    return (
        <div className={'modal-window'}>
            <h2 className={'modal-window__title'}>{title}</h2>
            {children}
        </div>
    );
};

export default ModalWindow;