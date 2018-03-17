import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import{ routing, appRoutingProviders } from './app.routing';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AppheaderComponent } from './plantilla/appheader/appheader.component';
import { AppfooterComponent } from './plantilla/appfooter/appfooter.component';
import { AppmenuComponent } from './plantilla/appmenu/appmenu.component';
import { AppsettingsComponent } from './plantilla/appsettings/appsettings.component';

//Services
import { UserService} from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent
  ],
  imports: [
    BrowserModule,
    routing,//aniadir routing
    FormsModule,
    HttpModule

  ],
  providers: [
    appRoutingProviders,
    UserService
  ],//aniadir appRo..
  bootstrap: [AppComponent]
})
export class AppModule { }
