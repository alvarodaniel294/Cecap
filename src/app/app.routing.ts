import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BaseComponent } from './registro/base/base.component';
import { ProgramaComponent} from './programa/programa.component';

const appRoutes: Routes = [
    {path: '', component: LoginComponent},//ruta basica
    {path: 'loginForm', component: LoginComponent},
    {path: 'home', component: HomeComponent,
        children: [
            {path: 'home', redirectTo: 'home', pathMatch: 'full' },
            {path: 'programa', component: ProgramaComponent},
            {path: 'registro', component: BaseComponent}
            
        ]

    },
    {path: 'registro' , component: BaseComponent},
    {path: 'programa', component: ProgramaComponent},
    
    //{path: '', component: LoginFormComponent}
    {path: '**', component: LoginComponent}//ruta redir

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);