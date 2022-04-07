import './App.css';
import AppRouter from "./components/AppRouter/AppRouter";
import {createContext} from "react";
import Store from "./store/store";

let store = new Store();
export const MyContext = createContext(store);

function App() {
    return (
        <MyContext.Provider value={{store}}>
            <AppRouter/>
        </MyContext.Provider>
    );
}

export default App;
