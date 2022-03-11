import {Component} from "react";
import HomePage from "../components/HomePage/HomePage";

const HOME_PAGE = '/';
const AUTH_PAGE = '/auth';
const ADD_PAGE = '/add';
const EDIT_PAGE = '/edit'; //добавить id
const DETAILS_PAGE = '/details'

export const routes = [
    {
        path: HOME_PAGE,
        Component: HomePage
    }
]
//todo с остальными по паналогии