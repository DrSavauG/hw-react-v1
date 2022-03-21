import React from 'react';
import {Route, Routes} from "react-router";
import {routes} from "./routes";
import {BrowserRouter,} from "react-router-dom";
import Error from "../Error/Error";

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
                        element={<Error/>}
                    />
                </Routes>
            </BrowserRouter>
    );

};

export default AppRouter;