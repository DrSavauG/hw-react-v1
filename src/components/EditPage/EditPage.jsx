import React, {useContext, useState} from 'react';
import {useLocation, useNavigate} from "react-router";
import AddPage from "../AddPage/AddPage";
import {MyContext} from "../AppRouter/AppRouter";
import ModalWindow from "../AddPage/ModalWindow/ModalWindow";
import checked from "../../../src/assets/icons/checked-red.svg";
import './style.css';

function toObject(arr) {
    const result = [];
    for (const arrKey of arr) {
        result.push({label: arrKey, value: arrKey})
    }
    return result;
}

const EditPage = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {store} = useContext(MyContext);

    if (location.state === null) {
        location.state = {};
        location.state.filmData = {};
    }

    const {
        title = '',
        url = '',
        release_date = '',
        runtime = '',
        _id = '',
        overview = 'example overview',
        genre = [],
        rating = ''
    } = location.state.filmData;

    const [selectGenre, setSelectGenre] = useState(toObject(genre));
    let [isDone, setIsDone] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        data.title = data.title.toLowerCase();
        data.genre = selectGenre.map((item) => item.value.toLowerCase());
        // location.pathname === '/edit' ? store.editFilm(_id, data).then(navigate('/')) : store.addFilm(data).then(navigate('/'));
        location.pathname === '/edit' ? store.editFilm(_id, data) : store.addFilm(data);
        setIsDone(!isDone);
        // reset();
    }

    const editData = {
        onSubmit: onSubmit,
        selectGenre: selectGenre,
        setSelectGenre: setSelectGenre,
        title: title,
        url: url,
        release_date: release_date,
        runtime: runtime,
        _id: _id,
        overview: overview,
        genre: genre,
        rating: rating
    }
    return (
        <div className={'main-wrapper '}>
            {
                isDone ?
                    <ModalWindow title={"congratulations!"} className={'congratulations'}>
                        <img className={"congratulations-checked"} src={checked}
                             alt={'checked'}/>{<p>The movie has been added to database successfully</p>}
                    </ModalWindow>
                    :
                    <AddPage name={location.pathname === '/edit' ? 'edit movie' : 'add movie'}>{editData}</AddPage>
            }
        </div>
    );
};

export default EditPage;