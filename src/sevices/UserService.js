import $api from "../http/http";

export default class UserService {
    static fetchUsers() {
        return $api.get('/users');
    }
}

