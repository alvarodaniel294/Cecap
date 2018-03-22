import { Component, OnInit } from '@angular/core';
import { PeticionesService} from '../../services/peticiones.service'
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from "./filter.pipe";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  providers:[PeticionesService],
  


  

})
export class BaseComponent implements OnInit {
  public listado_personas;

  public name: string;
  public searchText: string = "";

  

  constructor(

    private _peticionesService:PeticionesService  
  ) {}
  clearFilter() {
    this.searchText = "";
  }

  ngOnInit() {



  
    
        console.log(this._peticionesService.getPrueba)
    
        this._peticionesService.getPersonas().subscribe(
          result=>{
            
            this.listado_personas=result;
            console.log(this.listado_personas);
    
          },
          error=>{
            var errorMessage=<any>error;
            console.log(errorMessage);
          }
    
        );
        
        
      }
  }


