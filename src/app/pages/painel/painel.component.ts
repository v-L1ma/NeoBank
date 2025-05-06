import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-painel',
  imports: [RouterModule],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.scss'
})
export class PainelComponent {

  clientInfo={
    nome: 'vinicius',
    banco: 'neobank'
  }

  constructor(private router: Router){}

  irParaSacar(){
    this.router.navigate(["/sacar"], {
      state: {currentClient:this.clientInfo}
    })
  }
  irParaDepositar(){
    this.router.navigate(["/sacar"], {
      state: {currentClient:this.clientInfo}
    })
  }

  irParaTransferir(){
    this.router.navigate(["/transferir"])
  }

}
