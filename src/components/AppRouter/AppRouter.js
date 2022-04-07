import React from 'react';
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../HomePage/HomePage";
import DetailsPage from "../DetailsPage/DetailsPage";
import EditPage from "../EditPage/EditPage";
import AddPage from "../AddPage/AddPage";
import AuthPage from "../AuthPage/AuthPage";
import Layout from "../Layout/Layout";
import movieLists from "../../utils/movielist.json";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
const AuthPageProps = {titlePage:'log in'};
const RegistrationPageProps = {titlePage:'registration'};

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage>{movieLists}</HomePage>}/>

                    <Route path={'details'} element={<DetailsPage/>}/>
                    <Route path={'auth'} element={<AuthPage>{AuthPageProps}</AuthPage>}/>
                    <Route path={'registration'} element={<RegistrationPage>{RegistrationPageProps}</RegistrationPage>}/>
                    <Route path={'edit'} element={<EditPage/>}/>
                    <Route path={'add'} element={<AddPage/>}/>
                </Route>
                    <Route path={'*'} element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;