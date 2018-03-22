import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  public nombreUser:string;//variable de sesion de usuario

  constructor() { }

  ngOnInit() {
    //obteniendo sesion de usuario del localStorage
    this.nombreUser = localStorage.getItem('nombreUser');
    //console.log(localStorage.getItem('nombreUser'));
  }

}
