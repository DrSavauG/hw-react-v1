import React, {useState} from 'react';
import './style.css';
import Button from "../../../src/components/Button/Button";
import Burger from "../../../src/assets/icons/burger.svg";
import ContextMenu from "../../components/ContextMenu/ContextMenu";
import {store} from "../AppRouter/AppRouter";

const EditMenu = (props) => {
    let [burgerIsVisible, setBurgerIsVisible] = useState(true);
    // let [filData,setFilmData] = useState({});
    let id = props.id
    function onDelete(){
        store.deleteFilm(id);
    };
    function onEdit(){
        store.getFilmById(id)
        console.log('setFilmData',)
    };


    function onClickBurger() {
        console.log('onClickBurger')
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