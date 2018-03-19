import { Injectable } from "@angular/core";
import { HttpModule, Http, Response, Headers } from "@angular/http";

import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable'


import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable() 
export class PeticionesService{


    public url:string;

    constructor(private _http:HttpClient){
        this.url="https://jsonplaceholder.typicode.com/users";

    }

    getPrueba(){
        return "hola desde el setvicio"
    }

    getPersonas():Observable<any>{

        // return this._http.get(this.url)
        //                 .map(res => res.json() );



        return this._http.get(this.url);


    }

}