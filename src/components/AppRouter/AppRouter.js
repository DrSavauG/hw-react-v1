import React from 'react';
import HomePage from "../HomePage/HomePage";
import {Route, Routes} from "react-router";
import {routes} from "./routes";
import {BrowserRouter,} from "react-router-dom";

const AppRouter = () => {
    return (
            <BrowserRouter>
                <Routes>
                    {routes.map((item) => (
                        <Route
                            key={item.path}
                            path={item.path}
                            element={<item.Component/>}
                        />

                    ))}
                    <Route
                        path="*"
                        element={<HomePage/>}//404
                    />
                </Routes>
            </BrowserRouter>
    );

};

export default AppRouter;