import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { PrincipalComponent } from './principal/principal.component';
///////
import { AppheaderComponent } from './plantilla/appheader/appheader.component';
import { AppfooterComponent } from './plantilla/appfooter/appfooter.component';
import { AppmenuComponent } from './plantilla/appmenu/appmenu.component';
import { AppsettingsComponent } from './plantilla/appsettings/appsettings.component';
import { PersonaComponent } from './registro/persona/persona.component';
import { BaseComponent } from './registro/base/base.component';

//////

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    PersonaComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    routing,//aniadir routing
    HttpClientModule

  ],
  providers: [appRoutingProviders],//aniadir appRo..
  bootstrap: [AppComponent]
})
export class AppModule { }
