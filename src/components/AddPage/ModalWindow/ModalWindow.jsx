import React from 'react';
import Form from "../Form/Form";
// import buttonClose from '../../assets/icons/close-button.svg';

import Button from "../../HeaderHome/FindYourMovieForm/Button/Button";

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