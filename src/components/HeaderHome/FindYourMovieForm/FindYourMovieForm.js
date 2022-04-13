import React, {useState} from 'react';
import './style.css';
import Button from "../../Button/Button";

const FindYourMovieForm = () => {
    const [searchValue, setSearchValue] = useState('');

    function onClick() {
        console.log('searchValue', searchValue)
    }

    return (
        <div className={'find-you-movie'}>
            <label className={'find-you-movie__title'} htmlFor={'find-you-movie__input'}>
                Find your movie
                <div className={'find-you-movie__form'}>
                    <input value={searchValue}
                           className={'find-you-movie__input'} defaultValue={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)} type={'text'}
                           placeholder={'What do you want to watch?'}/>
                    <Button title={"search"} onClick={onClick} className={'button button__search'}/>
                </div>
            </label>
            </div>
    );
};

export default FindYourMovieForm;