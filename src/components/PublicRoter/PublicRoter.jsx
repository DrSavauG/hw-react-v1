import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";

const PublicRouter = () => {
    return (
        <Routes>
            <Route path={'/auth'} element={<LoginPage/>}/>
            <Route path={'/registration'} element={<RegistrationPage/>}/>
            <Route path={'*'} element={<Navigate to={'/auth'} replace />} />
        </Routes>
    );
};

export default PublicRouter;