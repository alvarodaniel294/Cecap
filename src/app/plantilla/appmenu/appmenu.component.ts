import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {
  public nombreUser:string;
  constructor() { }

  ngOnInit() {
    //obteniendo sesion de usuario del localStorage
    this.nombreUser = localStorage.getItem('nombreUser');
  }

}
