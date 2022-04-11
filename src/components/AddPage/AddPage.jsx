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
    const {store} = useContext(MyContext);
    // const onSubmit = (arg) => {
    //     store.login(arg.email, arg.password)
    // };
    const {title = 'title', url='url', genre=[], release_date='2020-01-01', runtime='runtime', _id, overview='example overview', rating='5'} = props.children;

    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: "onBlur"});
    const [selectGenre, setSelectGenre] = useState([])

    const onSubmit = (data) => {
        data.genre = selectGenre.map((item) => item.value)
        console.log(data);
        store.addFilm(data);
        // reset();
    }

    return (
        <div className={'main-wrapper '}>
            <ModalWindow title={props.name}>
                <Link to={'/'}>
                    <Button className={'modal-window__button-close'}>
                        <img src={buttonClose}
                             alt={'close'}/>
                    </Button>
                </Link>
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
                            <Overview register={register} errors={errors}/>
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

export default AddPage;
