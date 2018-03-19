import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BaseComponent } from './registro/base/base.component';

const appRoutes: Routes = [
    {path: '', component: LoginComponent},//ruta basica
    {path: 'loginForm', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'registro' , component: BaseComponent},
    
    //{path: '', component: LoginFormComponent}
    {path: '**', component: LoginComponent}//ruta redir

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);