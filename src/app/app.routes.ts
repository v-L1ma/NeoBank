import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PainelComponent } from './pages/painel/painel.component';
import { authGuard } from './guards/auth-guard.guard';
import { TranferenciaComponent } from './pages/tranferencia/tranferencia.component';
import { TranferenciaValorComponent } from './pages/tranferencia-valor/tranferencia-valor.component';
import { TransferenciaRevisaoComponent } from './pages/transferencia-revisao/transferencia-revisao.component';
import { LoginService } from './services/login.service';
import { AreapixComponent } from './pages/areapix/areapix/areapix.component';

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
        canActivate:[authGuard],
        data:{ message: "transferir"}
    },
    {
        path: "transferir/revisao",
        component: TransferenciaRevisaoComponent,
        canActivate: [authGuard],
        data:{ message: "transferir"}
    },
    {
        path: 'sacar',
        component: TranferenciaValorComponent,
        canActivate: [authGuard],
        data:{ message: "sacar"}
    },
    {
        path: "sacar/revisao",
        component: TransferenciaRevisaoComponent,
        canActivate: [authGuard],
        data:{ message: "sacar"}
    },
    {
        path: 'depositar',
        component: TranferenciaValorComponent,
        canActivate: [authGuard],
        data:{ message: "depositar"}
    },
    {
        path: "depositar/revisao",
        component: TransferenciaRevisaoComponent,
        canActivate: [authGuard],
        data:{ message: "depositar"}
    },
    {
        path: 'receber',
        component: TranferenciaValorComponent,
        canActivate: [authGuard],
        data:{ message: "receber"}
    },
    {
        path: "receber/revisao",
        component: TransferenciaRevisaoComponent,
        canActivate: [authGuard],
        data:{ message: "receber"}
    },
    {
        path: "areapix",
        component: AreapixComponent,
        canActivate: [authGuard]
    }
];
