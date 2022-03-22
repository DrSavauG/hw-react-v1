import React from 'react';
import './addpage-style.css';
import {useForm} from "react-hook-form";
import buttonClose from '../../assets/icons/close-button.svg'
import Button from "../HeaderHome/FindYourMovieForm/Button/Button";

const props = {
    title: 'add movie'
}

const AddPage = () => {
    return (
        <div className={'main-wrapper '}>
            {/*todo:/*{'REFACTOR names'}*/}
            <div className={'modal-window'}>
                <h2 className={'modal-window__title'}>{props.title}</h2>
                <button type={"button"} className={'modal-window__button-close'}>
                    <img src={buttonClose} alt={'x'}/>
                </button>
                <div className={'modal-window__list-wrapper'}>
                    <div className={'modal-window__list'}>
                        <div className={'list__left'}></div>
                        <div className={'list__right'}></div>
                    </div>
                        <div className={'modal-window--bottom'}></div>
                </div>

                <div className={'modal-window__buttons'}>
                    <Button title={'reset'} className={"button button-trans"}/>
                    <Button title={'submit'} className={"button button-red"}/>
                </div>
            </div>
        </div>
    );
};

export default AddPage;