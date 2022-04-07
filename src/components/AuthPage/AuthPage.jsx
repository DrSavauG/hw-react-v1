import React, {useState} from 'react';
import './style.css';
import Button from "../HeaderHome/FindYourMovieForm/Button/Button";
import ModalWindow from "../AddPage/ModalWindow/ModalWindow";
import Input from "../AddPage/Input/Input";
import {useForm} from "react-hook-form";
import Form from "../AddPage/Form/Form";

const AuthPage = () => {
    const [email,setEmail] = useState();//
    const [password,setPassword] = useState();//todo what

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
                            <Input>{{placeholder:"some@mail.com",defaultValue:"dr.savaug+1024@gmail.com",title: 'email', register: register, errors: errors}}</Input>
                            <Input>{{placeholder:"some@mail.com",defaultValue:"12345",title: 'password', register: register, errors: errors}}</Input>
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