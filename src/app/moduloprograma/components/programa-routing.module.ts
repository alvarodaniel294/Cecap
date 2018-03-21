import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import { ProgramaComponent} from './programa/programa.component';
import { FormProgramaComponent } from './form-programa/form-programa.component';

const programaRoutes: Routes = [
  { 
        path: 'programa-panel', 
        component: ProgramaComponent,
        children: [
            { path: 'form-programa', component: FormProgramaComponent }
        ]

    }
];

@NgModule({
   imports:[
        RouterModule.forChild(programaRoutes)
   ],
   exports: [
       RouterModule
   ]
})
export class ProgramaRoutingModule { }
