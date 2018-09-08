import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { FormsModule }       from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';

import { LoginComponent }    from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
