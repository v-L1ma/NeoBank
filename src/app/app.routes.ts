import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PainelComponent } from './pages/painel/painel.component';
import { authGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "cadastro",
        component: SignupComponent
    },
    {
        path: "painel",
        component: PainelComponent,
        canActivate: [authGuard]
    }
];
