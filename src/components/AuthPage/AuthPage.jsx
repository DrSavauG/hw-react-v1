import React, {useContext, useState} from 'react';
import './style.css';
import Button from "../HeaderHome/FindYourMovieForm/Button/Button";
import ModalWindow from "../AddPage/ModalWindow/ModalWindow";
import Input from "../AddPage/Input/Input";
import {useForm} from "react-hook-form";
import Form from "../AddPage/Form/Form";
import {MyContext} from "../../App";
import {Link} from "react-router-dom";

const AuthPage = (props) => {
    const {titlePage} = props.children;
    const {store} = useContext(MyContext);
    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: "onBlur"});

    const onSubmit = (arg) => {
         const{email,password}= arg;
         store.login(email,password)
        reset();
    }

    return (
        <div className={'login-wrapper'}>
            <div className={"cover"}></div>
            <ModalWindow title={titlePage}>
                <Form reset={reset} handleSubmit={handleSubmit}  onSubmit={onSubmit}>
                    <div className={'modal-window__list'}>
                        <div className={'modal-window--content'}>
                            <Input>{{placeholder:"some@mail.com",defaultValue:"dr.savaug+1024@gmail.com",title: 'email', register: register, errors: errors}}</Input>
                            <Input>{{placeholder:"some@mail.com",defaultValue:"12345",title: 'password', register: register, errors: errors}}</Input>
                        </div>
                    </div>
                    <div className={'modal-window__buttons'}>
                        <Link to={'/registration'}>
                        <Button title={'registration'} className={"button button-trans"}/>
                        </Link>
                        <Button title={'submit'} type={'submit'} className={"button button-red"}/>
                    </div>
                </Form>
            </ModalWindow>
        </div>
    );
};

export default AuthPage;