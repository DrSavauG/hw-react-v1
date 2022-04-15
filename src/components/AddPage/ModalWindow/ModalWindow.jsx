import React from 'react';
import Button from "../../Button/Button";
import buttonClose from "../../../assets/icons/close-button.svg";
import {Link} from "react-router-dom";

const ModalWindow = (props) => {
    return (
            <div className={'modal-window '+props.className}>
                <h2 className={'modal-window__title'}>{props.title}</h2>
                <Link to={'/'}>
                    <Button className={'modal-window__button-close'}>
                        <img src={buttonClose}
                             alt={'close'}/>
                    </Button>
                </Link>
                {props.children}
            </div>
    );
};

export default ModalWindow;