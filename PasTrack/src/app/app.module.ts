import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {BodyComponent} from './body/body.component';
import {InformationsComponent} from './informations/informations.component';
import {NgwWowModule} from 'ngx-wow';
import {AppComponent} from './app.component';
import {ChartsModule} from 'ng2-charts';
import {FooterComponent} from './footer/footer.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InterfaceComponent} from './interface/interface.component';
import {ProfilComponent} from './profil/profil.component';
import {SettingsComponent} from './settings/settings.component';
import { ForgotComponent } from './forgot/forgot.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        HomeComponent,
        BodyComponent,
        InformationsComponent,
        FooterComponent,
        DashboardComponent,
        InterfaceComponent,
        ProfilComponent,
        SettingsComponent,
        ForgotComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgwWowModule,
        BrowserModule,
        ChartsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
