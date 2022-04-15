import React, {useContext} from 'react';
import '../Auth/style.css';
import Auth from "../Auth/Auth";
import {MyContext} from "../AppRouter/AppRouter";

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
        buttonLeftTitle: 'Log in',
        buttonRightTitle: 'register',
        onSubmit: onSubmit,
    };

    return (
        <Auth>{dataRegistrationPage}</Auth>
    );
};

export default RegistrationPage;