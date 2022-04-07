import React, {useContext} from 'react';
import '../Auth/style.css';
import {MyContext} from "../../App";
import Auth from "../Auth/Auth";


const RegistrationPage = (props) => {
    const {store} = useContext(MyContext);
    const onSubmit = (arg) => {
        store.registration(arg.email, arg.password)
    };
    const dataRegistrationPage = {
        titlePage: 'registration',
        defaultValueMail: '',
        defaultValuePassword: '',
        linkTo: '/auth',
        buttonLeftTitle: 'buttonLeftTitle',
        buttonRightTitle: 'register',
        onSubmit: onSubmit,
    };

    return (
        <Auth>{dataRegistrationPage}</Auth>
    );
};

export default RegistrationPage;