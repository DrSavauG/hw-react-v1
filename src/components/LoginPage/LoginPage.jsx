import React, {useContext} from 'react';
import '../Auth/style.css';
import Auth from "../Auth/Auth";
import {MyContext} from "../AppRouter/AppRouter";

const LoginPage = (props) => {
    const {store} = useContext(MyContext);
    const onSubmit = (arg) => {
        store.login(arg.email, arg.password)
    };
    const dataLoginPage = {
        titlePage: 'log in',
        defaultValueMail: 'dr.savaug+10161@gmail.com',
        defaultValuePassword: '12345',
        linkTo: '/registration',
        buttonLeftTitle: 'registration',
        buttonRightTitle: 'login',
        store: store,
        onSubmit: onSubmit,
    };

    return (
        <Auth>{dataLoginPage}</Auth>
    );
};

export default LoginPage;