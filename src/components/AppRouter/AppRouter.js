import React, {useEffect} from 'react';
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../HomePage/HomePage";
import DetailsPage from "../DetailsPage/DetailsPage";
import EditPage from "../EditPage/EditPage";
import AddPage from "../AddPage/AddPage";
import Layout from "../Layout/Layout";
import movieLists from "../../utils/movielist.json";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import LoginPage from "../LoginPage/LoginPage";
import {createContext} from "react";
import Store from "../../store/store";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import PublicRouter from "../PublicRoter/PublicRoter";
import {observer} from "mobx-react-lite";

export const store = new Store();
export const MyContext = createContext(store);

const AppRouter = () => {
    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            console.log("token", token);//todo   запрос refresh на сервер
            store.checkAuth();
        }
    }, [])
    return (
        <MyContext.Provider value={{store}}>
            <BrowserRouter>
                <Layout>
                    {store.isAuth ? <PrivateRouter/> : <PublicRouter/>}
                </Layout>
            </BrowserRouter>
        </MyContext.Provider>

    );
};

export default observer(AppRouter);