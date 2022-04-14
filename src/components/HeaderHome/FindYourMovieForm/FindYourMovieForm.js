import React, {useState} from 'react';
import './style.css';
import Button from "../../Button/Button";
import Form from "../../AddPage/Form/Form";
import {useForm} from "react-hook-form";
import Input from "../../AddPage/Input/Input";
import {useNavigate} from "react-router";
import {store} from "../../AppRouter/AppRouter";

const FindYourMovieForm = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('searchValue');
    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: "onBlur"});

    const onSubmit = (data) => {

        const params = {
            find: {"_deletedAt": null, "title": {$regex: data.searchValue}},
            sort: {'title': -1}
        };
        store.getFilms(store.setMovieList, params).then(navigate('/'))
        reset()
    }

    return (
        <div className={'find-you-movie'}>
            <label className={'find-you-movie__title'} htmlFor={'find-you-movie__input'}>
                Find your movie
                <form className={'find-you-movie__form'} onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register(searchValue, {required: true})}
                        className={'find-you-movie__input'}
                        type={'text'}
                        placeholder={'What do you want to watch?'}/>
                    <Button title={"search"} type={'submit'} className={'button button__search'}/>
                </form>
            </label>
        </div>
    );
};

export default FindYourMovieForm;