import React from 'react';
import HomePage from "../HomePage/HomePage";
import {Route, Routes} from "react-router";
import {routes} from "../../utils/routes";
import {BrowserRouter, } from "react-router-dom";

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {routes.map((item) => (
                        <Route
                            key={item.path}
                            path={item.path}
                            element={<HomePage/>}
                        />

                    ))}
                    <Route
                        path="*"
                        element={<HomePage />}//404
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );

};

export default AppRouter;