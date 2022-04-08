import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import HomePage from "../HomePage/HomePage";
import movieLists from "../../utils/movielist.json";
import DetailsPage from "../DetailsPage/DetailsPage";
import EditPage from "../EditPage/EditPage";
import AddPage from "../AddPage/AddPage";
import ErrorPage from "../ErrorPage/ErrorPage";

const PrivateRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage>{movieLists}</HomePage>}/>
            <Route path={'/details'} element={<DetailsPage/>}/>
            <Route path={'/edit'} element={<EditPage/>}/>
            <Route path={'/add'} element={<AddPage/>}/>
            <Route path={'/auth'} element={<Navigate to={'/'} replace/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    );
};

export default PrivateRouter;