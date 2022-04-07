import React, {useContext, useState} from 'react';
import './style.css';
import Button from "../HeaderHome/FindYourMovieForm/Button/Button";
import ModalWindow from "../AddPage/ModalWindow/ModalWindow";
import Input from "../AddPage/Input/Input";
import {useForm} from "react-hook-form";
import Form from "../AddPage/Form/Form";
import {MyContext} from "../../App";
import {Link} from "react-router-dom";


const data = {
    titlePage:'registration',
    defaultValueMail:'',
    defaultValuePassword:'',
    linkTo:'/auth',
    buttonLeftTitle:'buttonLeftTitle',
    buttonRightTitle:'register',
}


const Auth = (props) => {
    const {titlePage,defaultValueMail,defaultValuePassword,linkTo,buttonLeftTitle,buttonRightTitle,onSubmit } = props.children;
    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: "onBlur"});

    return (
        <div className={'login-wrapper'}>
            <div className={"cover"}></div>
            <ModalWindow title={titlePage}>
                <Form reset={reset} handleSubmit={handleSubmit}  onSubmit={onSubmit}>
                    <div className={'modal-window__list'}>
                        <div className={'modal-window--content'}>
                            <Input>{{defaultValue:defaultValueMail,title: 'email', register: register, errors: errors}}</Input>
                            <Input>{{defaultValue:defaultValuePassword,title: 'password', register: register, errors: errors}}</Input>
                        </div>
                    </div>
                    <div className={'modal-window__buttons'}>
                        <Link to={linkTo}>
                            <Button title={buttonLeftTitle} className={"button button-trans"}/>
                        </Link>
                        <Button title={buttonRightTitle} type={'submit'} className={"button button-red"}/>
                    </div>
                </Form>
            </ModalWindow>
        </div>
    );
};

export default Auth;