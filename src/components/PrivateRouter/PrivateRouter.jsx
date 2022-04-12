import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import HomePage from "../HomePage/HomePage";
import DeletePage from "../DeletePage/DeletePage";
import EditPage from "../EditPage/EditPage";
import ErrorPage from "../ErrorPage/ErrorPage";

const PrivateRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage></HomePage>}/>
            <Route path={'/delete'} element={<DeletePage name={'delete movie'}/>}/>
            <Route path={'/edit'} element={<EditPage/>}/>
            <Route path={'/add'} element={<EditPage/>}/>
            <Route path={'/auth'} element={<Navigate to={'/'} replace/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    );
};

export default PrivateRouter;