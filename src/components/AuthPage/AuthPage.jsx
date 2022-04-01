import React from 'react';
import './style.css';
import Button from "../HeaderHome/FindYourMovieForm/Button/Button";
import ModalWindow from "../AddPage/ModalWindow/ModalWindow";
import Input from "../AddPage/Input/Input";
import {useForm} from "react-hook-form";
import Form from "../AddPage/Form/Form";

const AuthPage = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: "onBlur"});

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className={'login-wrapper'}>
            <div className={"cover"}></div>
            <ModalWindow title={"log in"}>
                <Form reset={reset} handleSubmit={handleSubmit}  onSubmit={onSubmit}>
                    <div className={'modal-window__list'}>
                        <div className={'modal-window--content'}>
                            <Input>{{title: 'title', register: register, errors: errors}}</Input>
                            <Input>{{title: 'movie url', register: register, errors: errors}}</Input>
                        </div>
                    </div>
                    <div className={'modal-window__buttons'}>
                        <Button title={'reset'} type={'reset'} className={"button button-trans"}/>
                        <Button title={'submit'} type={'submit'} className={"button button-red"}/>
                    </div>
                </Form>
            </ModalWindow>
        </div>
    );
};

export default AuthPage;