import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PainelComponent } from './pages/painel/painel.component';
import { authGuard } from './guards/auth-guard.guard';
import { TranferenciaComponent } from './pages/tranferencia/tranferencia.component';
import { TranferenciaValorComponent } from './pages/tranferencia-valor/tranferencia-valor.component';
import { TransferenciaRevisaoComponent } from './pages/transferencia-revisao/transferencia-revisao.component';

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

    },
    {
        path: "transferir",
        component: TranferenciaComponent,
        canActivate:[authGuard]
    },
    {
        path: "transferir/valor",
        component: TranferenciaValorComponent,
        canActivate:[authGuard]
    },
    {
        path: "transferir/revisao",
        component: TransferenciaRevisaoComponent,
        canActivate: [authGuard]
    },
    {
        path: 'sacar',
        component: TranferenciaValorComponent,
        canActivate: [authGuard]
    },
    {
        path: 'depositar',
        component: TranferenciaValorComponent,
        canActivate: [authGuard]
    },
    {
        path: 'receber',
        component: TranferenciaValorComponent,
        canActivate: [authGuard]
    }
];
