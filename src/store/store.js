import {makeAutoObservable} from "mobx";
import AuthService from "../sevices/AuthService";
import SORTLISTS from "../utils/sortlists";
import NAVIGATION from "../utils/navigation";
import {API_URL} from "../http/http";
import axios from "axios";
import UserService from "../sevices/UserService";

export default class Store {
    constructor() {
        makeAutoObservable(this);
    }
    user = {};
    isAuth = false;
    isLoading = false;
    SORTLISTS = SORTLISTS;
    NAVIGATION = NAVIGATION;

    params = {find: {_deletedAt: null}, sort: {title: 1}};

    setLoading(bool) {
        this.isLoading = bool;
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);//todo сократить функции
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }

    async getUsers(setUsers){
        try{
            const res = await UserService.fetchUsers();
            setUsers(res.data);
            console.log(res.data.map(el=>el.email));
        }catch (e){
            console.log(e.response?.data?.message);
        }
    }

    async getFilms(setMovieList,params){
        try{
            const res = await UserService.fetchFilms(params);
            setMovieList(res.data);
        }catch (e){
            console.log(e.response?.data?.message);
        }
    }

    async getFilmById(id){
        try{
            const res = await UserService.getFilmById(id);
            console.log('res.data into setFilmData',res.data[0])
        }catch (e){
            console.log(e.response?.data?.message);
        }
    }

    async addFilm(arg) {
        try {
            const response = await UserService.addFilm(arg);
            localStorage.setItem('token', response.data.accessToken);//todo сократить функции
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }


    async editFilm(_id,data) {
        try {
            const response = await UserService.editFilm(_id,data);
            localStorage.setItem('token', response.data.accessToken);//todo сократить функции
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async deleteFilm(arg) {
        try {
            const response = await UserService.deleteFilm(arg);
            localStorage.setItem('token', response.data.accessToken);//todo сократить функции
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }



}
