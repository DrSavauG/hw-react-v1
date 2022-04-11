import React, {useEffect, useState} from 'react';
import './style.css';
import Button from "../../../src/components/Button/Button";
import Burger from "../../../src/assets/icons/burger.svg";
import ContextMenu from "../../components/ContextMenu/ContextMenu.jsx";
import {store} from "../AppRouter/AppRouter";
import {useNavigate} from "react-router";

const EditMenu = (props) => {
    let navigate = useNavigate();
    const {title, url, genre, release_date, runtime, _id, overview, rating} = props.filmData;
    let [filmData,setFilmData] = useState({})
    let [burgerIsVisible, setBurgerIsVisible] = useState(true);
    // setFilmData(props.filmData);

    // useEffect(() => {
    //     store.getFilms(setMovieList);
    // }, []);

    function onDelete(){
        store.deleteFilm(_id);
        setBurgerIsVisible(!burgerIsVisible);
    };


    function onEdit(){
        navigate('/edit',{state:props.filmData})
            // store.getFilmById(_id);
        // setFilmData =  store.getFilmById(id)
    };


    function onClickBurger() {
        setBurgerIsVisible(!burgerIsVisible);
    }

    return (
        <div className={props.className}>
        {burgerIsVisible ?
            <Button className={'burger'} onClick={onClickBurger}>
                <img src={Burger}
                     alt={'click to context menu'}/>
            </Button>
            : <ContextMenu  onClose={onClickBurger} onEdit={onEdit} onDelete={onDelete}></ContextMenu>}
        </div>
    )
}
export default EditMenu;