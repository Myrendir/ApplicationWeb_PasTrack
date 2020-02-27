import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';
import { InformationsComponent } from './informations/informations.component';
// /animations';
import { NgwWowModule } from 'ngx-wow';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BodyComponent,
    InformationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
