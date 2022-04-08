import React, {useState} from 'react';
import './style.css';
import FindYourMovieForm from "./FindYourMovieForm/FindYourMovieForm";
import Button from "./FindYourMovieForm/Button/Button";
import {Link} from "react-router-dom";
import {store} from "../AppRouter/AppRouter";


const HeaderHome = () => {
    const [users,setUsers] = useState();

    return (
            <div className={'header-home-wrapper'}>
                <Link to={'/add'}>
                    <Button title={"+ add movie"} className={'button button__add-movie'}/>
                </Link>
                <Button onClick={()=>store.logout()} title={'log out'} className={'button button__add-movie button-logout'}> </Button>
                {/*//todo:delete*/}
                <Button onClick={()=>store.getUsers(setUsers)} title={'users'} className={'button button__add-movie button-getUsers'}> </Button>
                {/**/}
                <FindYourMovieForm/>
            </div>
    )
};

export default HeaderHome;