import './App.css';
import AppRouter from "./components/AppRouter/AppRouter";
import {createContext} from "react";
import SORTLISTS from "./utils/sortlists";
import NAVIGATION from "./utils/navigation";
export const MyContext = createContext('context error');

function App() {
    return (
        <MyContext.Provider value={{NAVIGATION,SORTLISTS}}>
            <AppRouter/>
        </MyContext.Provider>
    );
}

export default App;
