import React, {useContext, useState} from 'react';
import {useLocation, useNavigate} from "react-router";
import AddPage from "../AddPage/AddPage";
import {MyContext} from "../AppRouter/AppRouter";

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
        title = 'title',
        url = 'url',
        release_date = '2020-01-01',
        runtime = 'runtime',
        _id = '',
        overview = 'example overview',
        genre = [],
        rating = '5'
    } = location.state.filmData;
    const [selectGenre, setSelectGenre] = useState(toObject(genre));

    const onSubmit = (data) => {
        data.genre = selectGenre.map((item) => item.value);
        location.pathname === '/edit' ? store.editFilm(_id, data).then(navigate('/')) : store.addFilm(data).then(navigate('/'));
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
        <AddPage name={location.pathname === '/edit' ?'edit movie':'add movie'}>{editData}</AddPage>
    );
};

export default EditPage;