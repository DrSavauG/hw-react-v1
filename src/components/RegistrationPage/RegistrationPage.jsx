import React, {useContext} from 'react';
import '../Auth/style.css';
import Auth from "../Auth/Auth";
import {MyContext} from "../AppRouter/AppRouter";

const RegistrationPage = (props) => {
    const {store} = useContext(MyContext);
    const onSubmit = (arg) => {
        store.registration(arg.email, arg.password)
    };
    const logout = () => {
        console.log('logout');
        store.logout();
    }

    const dataRegistrationPage = {
        titlePage: 'registration',
        defaultValueMail: '',
        defaultValuePassword: '',
        linkTo: '/auth',
        buttonLeftTitle: 'logout',
        buttonRightTitle: 'register',
        onSubmit: onSubmit,
        onClick: logout,
    };

    return (
        <Auth>{dataRegistrationPage}</Auth>
    );
};

export default RegistrationPage;