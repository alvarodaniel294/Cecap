import { Component, OnInit } from '@angular/core';
import { User } from '../modelo/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario:User;
  title = 'CECAP COMPANY';

  constructor() {   
      this.usuario = new User("Max","Choque", "maxc.m6811@gmail.com","max123"); 
  }

  ngOnInit() {
    console.log(this.usuario);
  }
  login(e){
    e.preventDefault();
    var userName = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log(userName, password);
    this.verificarTipoUsuario(userName,password);
  }
  verificarTipoUsuario(userName, password){
    if(userName == "Max" && password == "max123"){
      console.log("Este usuario es administrador");
    }else{
      console.log("Este usuario no es Administrador");
    }

  }
  

}
