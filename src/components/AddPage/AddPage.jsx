import React, {useState} from 'react';
import './addpage-style.css';
import {Controller,useForm} from "react-hook-form";
import buttonClose from '../../assets/icons/close-button.svg';
import Button from "../HeaderHome/FindYourMovieForm/Button/Button";
import Input from "./Input/Input";
import MultiSelected from "./MultiSelected/MultiSelected";


const AddPage = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: "onBlur"});
    const [selectGenre, setSelectGenre] = useState([])
    const onSubmit = (data) => {
        data.genre = selectGenre.map((item) => item.value)
        console.log(data);
        reset()
    }
    return (
        <div className={'main-wrapper '}>
            <div className={'modal-window'}>
                <h2 className={'modal-window__title'}>add movie</h2>
                <button type={"button"} className={'modal-window__button-close'}>
                    <img src={buttonClose} alt={'close'}/>
                </button>
                <form onSubmit={handleSubmit(onSubmit)} className={'modal-window__list-wrapper'}>
                    <div className={'modal-window__list'}>
                        <div className={'modal-window--top'}>
                            <div className={'list__left'}>
                                <Input key={'title'} title={'title'} register={register} errors={errors}/>
                                <Input key={'movie url'} title={'movie url'} register={register} errors={errors}/>
                                <MultiSelected selectGenre={selectGenre} setSelectGenre={setSelectGenre} title={'genre'}/>
                            </div>
                            <div className={'list__right'}>
                                <Input key={'release date'} title={'release date'} type={'date'} register={register} errors={errors}/>
                                <Input key={'rating'} title={'rating'} register={register} type={'number'} errors={errors}/>
                                <Input key={'runtime'} title={'runtime'} register={register} errors={errors}/>
                            </div>
                        </div>
                        <div className={'modal-window--bottom'}>
                            <Input key={'title'} title={'title'} register={register} errors={errors}/>
                        </div>
                    </div>
                    <div className={'modal-window__buttons'}>
                        <Button title={'reset'} type={'reset'} className={"button button-trans"}/>
                        <Button title={'submit'} type={'submit'} className={"button button-red"}/>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddPage;
