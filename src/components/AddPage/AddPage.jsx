import React, {useContext, useState} from 'react';
import './addpage-style.css';
import buttonClose from '../../assets/icons/close-button.svg';
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import Form from "./Form/Form";
import ModalWindow from "./ModalWindow/ModalWindow";
import {useForm} from "react-hook-form";
import MultiSelected from "./MultiSelected/MultiSelected";
import Input from "./Input/Input";
import Overview from "./Overview/Overview";
import {MyContext} from "../AppRouter/AppRouter";


const AddPage = (props) => {
    const {title, url, release_date,genre, runtime, _id, overview, rating,selectGenre,onSubmit,setSelectGenre} = props.children;
    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: "onBlur"});
    return (
            <ModalWindow title={props.name}>
                <Form reset={reset} handleSubmit={handleSubmit} selectGenre={selectGenre}
                      setSelectGenre={setSelectGenre} onSubmit={onSubmit}>
                    <div className={'modal-window__list'}>
                        <div className={'modal-window--top'}>
                            <div className={'list__left'}>
                                <Input>{{title: "title",defaultValue:title, register: register, errors: errors}}</Input>
                                <Input>{{title: 'url',defaultValue:url, register: register, errors: errors}}</Input>
                                <MultiSelected selectGenre={selectGenre} setSelectGenre={setSelectGenre}
                                               title={'genre'}/>
                            </div>
                            <div className={'list__right'}>
                                <Input>{{
                                    defaultValue:release_date,
                                    title: 'release_date',
                                    type: 'date',
                                    register: register,
                                    errors: errors
                                }}</Input>
                                <Input>{{defaultValue:rating,title: 'rating', type: 'number', register: register, errors: errors}}</Input>
                                <Input>{{defaultValue:runtime,title: 'runtime', register: register, errors: errors}}</Input>
                            </div>
                        </div>
                        <div className={'modal-window--bottom'}>
                            <Overview name={'overview'} register={register} errors={errors} defaultValue={overview}></Overview>
                        </div>
                    </div>
                    <div className={'modal-window__buttons'}>
                        <Button title={'reset'} type={'reset'} className={"button button-trans"}/>
                        <Button title={'submit'} type={'submit'} className={"button button-red"}/>
                    </div>
                </Form>
            </ModalWindow>
    );
};

export default AddPage;
