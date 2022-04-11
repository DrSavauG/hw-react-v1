import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import HomePage from "../HomePage/HomePage";
import DetailsPage from "../DetailsPage/DetailsPage";
import EditPage from "../EditPage/EditPage";
import AddPage from "../AddPage/AddPage";
import ErrorPage from "../ErrorPage/ErrorPage";
const addPageData = {title:'title', url:'url', genre:[], release_date:'2020-01-01', runtime:'runtime', overview:'example overview', rating:'5'};

const PrivateRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage></HomePage>}/>
            <Route path={'/details'} element={<DetailsPage/>}/>
            <Route path={'/edit'} element={<EditPage/>}/>
            <Route path={'/add'} element={<AddPage name={'Add movie'}>{addPageData}</AddPage>}/>
            <Route path={'/auth'} element={<Navigate to={'/'} replace/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    );
};

export default PrivateRouter;