import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import{ routing, appRoutingProviders } from './app.routing';

//modulos nuevos de la app
import { ModuloProgramaModule } from './moduloprograma/components/programa.module';


//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AppheaderComponent } from './plantilla/appheader/appheader.component';
import { AppfooterComponent } from './plantilla/appfooter/appfooter.component';
//import { AppcenterhomeComponent } from './plantilla/appcenterhome/appcenterhome.component';//prueba
import { AppmenuComponent } from './plantilla/appmenu/appmenu.component';
import { AppsettingsComponent } from './plantilla/appsettings/appsettings.component';
import { PersonaComponent } from './registro/persona/persona.component';
import { BaseComponent } from './registro/base/base.component';
//import { ProgramaComponent } from './moduloprograma/components/programa/programa.component';
 
//Services
import { UserService} from './services/user.service';


import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './registro/form/form.component';
//import { FormProgramaComponent } from './moduloprograma/components/form-programa/form-programa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppheaderComponent,
    AppfooterComponent,
    //AppcenterhomeComponent,
    AppmenuComponent,
    AppsettingsComponent,
    PersonaComponent,
    BaseComponent,
    FormComponent,
    //FormProgramaComponent
   // ProgramaComponent
  ],
  imports: [
    BrowserModule,
    routing,//aniadir routing
    HttpClientModule,
    FormsModule,
    HttpModule,
    ModuloProgramaModule,

  ],
  providers: [
    appRoutingProviders,
    UserService
  ],//aniadir appRo..
  bootstrap: [AppComponent]
})
export class AppModule { }
