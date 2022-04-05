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

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage>{movieLists}</HomePage>}/>
                    <Route path={'details'} element={<DetailsPage/>}/>
                    <Route path={'auth'} element={<AuthPage/>}/>
                    <Route path={'edit'} element={<EditPage/>}/>
                    <Route path={'add'} element={<AddPage/>}/>
                </Route>
                    <Route path={'*'} element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;