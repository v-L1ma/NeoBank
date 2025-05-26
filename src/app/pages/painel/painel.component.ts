import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FetchUserInfoService } from '../../services/fetch-user-info.service';
import { ExtratoService } from '../../services/extrato/extrato.service';

interface transacao {
  tipo: string;
  receiverName: string;
  data: string;  
  value: number;
}

@Component({
  selector: 'app-painel',
  imports: [RouterModule],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.scss'
})
export class PainelComponent implements OnInit{

  clientInfo={
    id: "",
    nome: '',
    banco: '',
    balance: 0
  }

  transacoes: transacao[] = [];

  constructor(private router: Router, private fetchUserInfo: FetchUserInfoService, private extratoService: ExtratoService){}
  
  ngOnInit(): void {

    const userInfo = JSON.parse(localStorage.getItem('userInfo')!);

    this.fetchUserInfo.fetch(userInfo.id).subscribe({
      next: (response) => {
        this.clientInfo.id = response.id;
        this.clientInfo.nome = response.name;
        this.clientInfo.balance = response.balance;
        this.clientInfo.banco = "NeoBank S.A.";
      },
      error: (error) => {
        console.log("Houve um erro: ",error);
      }
    })

    this.extratoService.extrato(userInfo.id).subscribe({
      next: (response)=>{
        this.transacoes = response.transacoes
        console.log(this.transacoes)
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }

  get transacoesOrdenadas() {
    return this.transacoes.sort(
      (transacaoA, transacaoB) => 
        new Date(transacaoB.data).getTime() - new Date(transacaoA.data).getTime()
    );
  }

  irParaSacar(){
    this.router.navigate(["/sacar"], {
      state: {currentClient:this.clientInfo}
    })
  }
  irParaDepositar(){
    this.router.navigate(["/depositar"], {
      state: {currentClient:this.clientInfo}
    })
  }

  irParaTransferir(){
    this.router.navigate(["/transferir"])
  }

  irParaAreaPix(){
    this.router.navigate(["/areapix"])
  }

}
