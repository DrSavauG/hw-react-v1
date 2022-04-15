import React from 'react';
import './style.css';
import Button from "../Button/Button";
import close from '../../assets/icons/close-button.svg'
import buttonClose from "../../assets/icons/close-button.svg";

const ContextMenu = (props) => {

    return (
        <div className={'context-menu'}>
            <Button className={'button-close__small'} onClick={props.onClose}>
            <img src={buttonClose}  height={"10px"}
                width={"10px"}
                 alt={'close'}/>
        </Button>
    <Button className={'context-menu_btn'} onClick={props.onEdit}>Edit</Button>
    <Button className={'context-menu_btn'} onClick={props.onDelete}>Delete</Button>
</div>
)
    ;
};

export default ContextMenu;