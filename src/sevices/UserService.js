import $api from "../http/http";

export default class UserService {

    static fetchUsers() {
        return $api.get('/users');
    }
    static fetchFilms(params) {
        return $api.get('/films', {params:{params}});
    }
    static getFilmById(id){
        return $api.get(`/films/${id}`);
    }

    static addFilm(arg) {
        return $api.post('/films', {arg});
    }
    static editFilm(_id,arg) {
        return $api.put(`/films/${_id}`, {arg});
    }
    static deleteFilm(_id){
        return $api.delete(`/films/${_id}`)
    }



}

