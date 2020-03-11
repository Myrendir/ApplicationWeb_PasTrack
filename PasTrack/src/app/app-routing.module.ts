import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InterfaceComponent} from './interface/interface.component';
import {ProfilComponent} from './profil/profil.component';
import {SettingsComponent} from './settings/settings.component';
import {ForgotComponent} from './forgot/forgot.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'accueil', component: HomeComponent},
    {path: 'connexion', component: LoginComponent},
    {path: 'inscription', component: SignupComponent},
    {path: 'forgot', component: ForgotComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'interface', component: InterfaceComponent},
    {path: 'profil', component: ProfilComponent},
    {path: 'parametres', component: SettingsComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
