import React, {useEffect, useState} from 'react';
import './style.css';
import Button from "../../../src/components/Button/Button";
import Burger from "../../../src/assets/icons/burger.svg";
import ContextMenu from "../../components/ContextMenu/ContextMenu.jsx";
import {store} from "../AppRouter/AppRouter";
import {useNavigate} from "react-router";

const EditMenu = (props) => {
    let navigate = useNavigate();
    let [burgerIsVisible, setBurgerIsVisible] = useState(true);

    function onDelete(){
        // store.deleteFilm(props.filmData._id);
        setBurgerIsVisible(!burgerIsVisible);
        navigate('/delete',{state:{filmId:props.filmData._id}})
    };


    function onEdit(){
        setBurgerIsVisible(!burgerIsVisible);
        navigate('/edit',{state:{filmData:props.filmData}})
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