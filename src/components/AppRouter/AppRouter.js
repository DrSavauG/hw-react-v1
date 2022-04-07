import React from 'react';
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

export const store = new Store();
export const MyContext = createContext(store);

const AppRouter = () => {
    return (
        <MyContext.Provider value={{store}}>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage>{movieLists}</HomePage>}/>
                    <Route path={'details'} element={<DetailsPage/>}/>
                    <Route path={'auth'} element={<LoginPage/>}/>
                    <Route path={'registration'} element={<RegistrationPage/>}/>
                    <Route path={'edit'} element={<EditPage/>}/>
                    <Route path={'add'} element={<AddPage/>}/>
                </Route>
                    <Route path={'*'} element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
</MyContext.Provider>

);
};

export default AppRouter;