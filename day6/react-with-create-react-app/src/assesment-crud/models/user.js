export class User {
    email;
    fist_name;
    last_name;
    pwd;
    username;
    constructor(email, fist_name, last_name, pwd, username) {
        this.email = email;
        this.fist_name = fist_name;
        this.last_name = last_name;
        this.pwd = pwd;
        this.username = username;
    }
}