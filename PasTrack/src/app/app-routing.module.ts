import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {BodyComponent} from './body/body.component';
import {InformationsComponent} from './informations/informations.component';
import {FooterComponent} from "./footer/footer.component";


const routes: Routes = [
    {path: '', component: BodyComponent},
    {path: 'home', component: HomeComponent},
    {path: 'body', component: BodyComponent},
    {path: 'informations', component: InformationsComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
