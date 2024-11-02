export interface UserLoginData {
    email : string;
    password : string;
}

export interface UserRegisterData {
    email : string;
    password : string;
    passwordConf : string;
}

export interface Chat {
    id : number;
    name : string;
}