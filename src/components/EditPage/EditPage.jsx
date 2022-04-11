import React from 'react';
import {useLocation} from "react-router";
import AddPage from "../AddPage/AddPage";

const EditPage = (props) => {
    const location = useLocation();
    return (
        <AddPage name={'edit movie'}>{location.state}</AddPage>
    );
};

export default EditPage;