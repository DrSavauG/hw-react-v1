import $api from "../http/http";

export default class UserService {
    static fetchUsers() {
        return $api.get('/users');
    }
    static fetchFilms() {
        return $api.get('/films');
    }
    static addFilm(arg) {
       return $api.post('/films', {arg});

}



}

