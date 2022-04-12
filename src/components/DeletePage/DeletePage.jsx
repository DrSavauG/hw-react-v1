import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import buttonClose from "../../assets/icons/close-button.svg";
import ModalWindow from "../AddPage/ModalWindow/ModalWindow";
import {useLocation, useNavigate} from "react-router";
import {MyContext} from "../AppRouter/AppRouter";
import './style.css';

const DeletePage = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const {store} = useContext(MyContext);
    console.log(location)
    const deletePageData = {
        _id: location.state.filmId,
        text: "Are you sure you want to delete this movie?",
    };

    return (
        <ModalWindow title={props.name}>
            <div className={'delete-page-content'}>
                <p>{deletePageData.text}</p>
                <Button onClick={()=> {
                    store.deleteFilm(deletePageData._id).then(navigate('/'));
                }} title={'confirm'} type={'submit'} className={"button button-red delete-btn-confirm"}/>
            </div>

        </ModalWindow>
    );
};

export default DeletePage;