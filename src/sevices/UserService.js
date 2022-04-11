import $api from "../http/http";

export default class UserService {

    static fetchUsers() {
        return $api.get('/users');
    }
    static fetchFilms() {
        return $api.get('/films');
    }
    static getFilmById(id){
        return $api.get(`/films/${id}`);
    }

    static addFilm(arg) {
        return $api.post('/films', {arg});
    }
    // static editFilm(arg) {
    //     return $api.post('/films', {arg});
    // }
    static deleteFilm(_id){
        return $api.delete(`/films/${_id}`)
    }



}

