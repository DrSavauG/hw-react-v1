import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import {createContext} from "react";
import Store from "../../store/store";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import PublicRouter from "../PublicRoter/PublicRoter";
import {observer} from "mobx-react-lite";
import IsLoading from "../IsLoading/IsLoading";
 const store = new Store();
export const MyContext = createContext(store);

const AppRouter = () => {

    let token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            store.checkAuth();
        }
        console.log('refresh approuter')
    }, [token]);

    if(store.isLoading){
        return(<IsLoading/>)
    }
    return (
        <MyContext.Provider value={{store}}>
           <BrowserRouter>
                 <Layout>
                     {store.isAuth ? <PrivateRouter/> : <PublicRouter/>}
                 </Layout>
             </BrowserRouter>
         </MyContext.Provider>
    );
};

export default observer(AppRouter);