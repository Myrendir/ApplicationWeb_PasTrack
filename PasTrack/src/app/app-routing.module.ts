import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'accueil', component: HomeComponent},
    {path: 'connexion', component: LoginComponent},
    {path: 'inscription', component: SignupComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
