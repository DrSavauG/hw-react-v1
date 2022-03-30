import React from 'react';
import './addpage-style.css';
import buttonClose from '../../assets/icons/close-button.svg';
import Button from "../HeaderHome/FindYourMovieForm/Button/Button";
import {Link} from "react-router-dom";
import Form from "./Form/Form";

const AddPage = () => {

    return (
        <div className={'main-wrapper '}>
            <div className={'modal-window'}>
                <h2 className={'modal-window__title'}>add movie</h2>
                <Link to={'/'}>
                    <Button className={'modal-window__button-close'}>
                        <img src={buttonClose}
                             alt={'close'}/>
                    </Button>
                </Link>
                <Form></Form>
            </div>
        </div>
    );
};

export default AddPage;
