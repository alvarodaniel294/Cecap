import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing//aniadir routing

  ],
  providers: [appRoutingProviders],//aniadir appRo..
  bootstrap: [AppComponent]
})
export class AppModule { }
