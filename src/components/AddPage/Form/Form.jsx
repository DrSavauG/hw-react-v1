import React, {useState} from 'react';
import Input from "../Input/Input";
import MultiSelected from "../MultiSelected/MultiSelected";
import Overview from "../Overview/Overview";
import Button from "../../HeaderHome/FindYourMovieForm/Button/Button";
import {useForm} from "react-hook-form";

const Form = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: "onBlur"});
    const [selectGenre, setSelectGenre] = useState([])

    const onSubmit = (data) => {
        data.genre = selectGenre.map((item) => item.value)
        console.log(data);
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'modal-window__list-wrapper'}>
            <div className={'modal-window__list'}>
                <div className={'modal-window--top'}>
                    <div className={'list__left'}>
                        <Input>{{title: 'title', register: register, errors:errors}}</Input>
                        <Input>{{title: 'movie url', register: register, errors:errors}}</Input>
                         <MultiSelected selectGenre={selectGenre} setSelectGenre={setSelectGenre}
                                       title={'genre'}/>
                    </div>
                    <div className={'list__right'}>
                        <Input>{{title: 'release date',type:'date', register: register, errors:errors}}</Input>
                        <Input>{{title: 'rating',type:'number', register: register, errors:errors}}</Input>
                        <Input>{{title: 'runtime', register: register, errors:errors}}</Input>

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
        </form>
    );
};

export default Form;