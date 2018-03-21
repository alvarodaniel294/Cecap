import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import{ ProgramaRoutingModule } from './programa-routing.module';

//import components
import { ProgramaComponent } from './programa/programa.component';
import { FormProgramaComponent } from './form-programa/form-programa.component';
//import { AppcenterhomeComponent } from '../../plantilla/appcenterhome/appcenterhome.component';


@NgModule({
    declarations: [
        ProgramaComponent,
        FormProgramaComponent,
    ],
    imports: [
        CommonModule, 
        FormsModule,
        ProgramaRoutingModule
    ],
    exports: [
        //AppcenterhomeComponent
        ProgramaComponent
    ],
    providers: []
  })
  export class ModuloProgramaModule { }