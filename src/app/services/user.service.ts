import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService{
    public url: string;

    constructor(private _http: Http){
        this.url = GLOBAL.url;
    }
    register(){
        return "texto desde el servicio usuario";

    }
    //metodo para autenticar el usuario
    signup(user_to_login, gettoken = null ){
        if(gettoken!=null)//sacamos el token y preguntamos
        {
            user_to_login.gettoken = gettoken;
        }
        let params=JSON.stringify(user_to_login);
        let headers= new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'login', params, {headers:headers})
                    .map(res => res.json());
    }
    
}