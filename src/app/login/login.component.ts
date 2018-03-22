import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL} from '../services/global';
import { UserService } from '../services/user.service';
import { User } from '../modelo/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UserService ]
})
export class LoginComponent implements OnInit {

  public title:string;
  public usuario:User;
  public identity; //para guardar la identificacion
  public token;
  public status:string;
  public nombreUser:string;

    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService
    ){  
       this.title = 'CECAP COMPANY';
       this.usuario = new User('','', '','','', 'ROLE_USER',''); 
    }

    ngOnInit() {
      console.log('login.component cargado');
      console.log('this._userService.register()');
    }
    onSubmit(){
      console.log(this.usuario);//sadas
      this._userService.signup(this.usuario).subscribe(
        response =>{
              this.identity = response.usuario;
              if(!this.identity || !this.identity._id ){
                alert('el usuario no se a logeado');
              }else{
                 console.log(this.identity);//mostrar identity
                  //obtener token
                  this._userService.signup(this.usuario, 'true').subscribe(
                    response => {
                          this.token = response.token;
                          if(this.token.length <= 0){
                            alert('el token se a creado');
                          }else{
                            console.log(this.token);//mostrar el token
                            this.status = 'success';
                          }
                    },
                    error => {
                        console.log(<any>error);
                    }
                  );
            }
        },
        error => {
            //console.log(<any>error);
            var errorMessage = <any>error;
              if(errorMessage != null){
                 var body = JSON.parse(error._body);
                 this.status = 'error';
              }
        }
      );
    }

    login(e){
      e.preventDefault();
      var userName = e.target.elements[0].value;
      var password = e.target.elements[1].value;
      console.log(userName, password);
      this.verificarTipoUsuario(userName,password);
    }
    verificarTipoUsuario(userName, password){
      if(userName == "max" && password == "max123"){
        console.log("Este usuario es administrador");
      }else{
        console.log("Este usuario no es Administrador");
      }

    }
  
    guardarSesion(){
      localStorage.setItem('nombreUser',this.nombreUser);//modifica en el localStorage 
      console.log(localStorage.getItem('nombreUser'));//obtiene el dato del localStorage
    }
}
