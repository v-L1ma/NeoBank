import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-tranferencia',
  imports: [RouterModule],
  templateUrl: './tranferencia.component.html',
  styleUrl: './tranferencia.component.scss',
  animations: [
    trigger('subirAnimacao', [
      transition(':enter', [ 
        style({ opacity: .5, transform: 'translateY(180px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class TranferenciaComponent {
  users = [
    {
      nome: "vinicius",
      banco: "NeoBank S.A.",
      id: 1
    },
    {
      nome: "vanuza",
      banco: "NeoBank S.A.",
      id:2
    },
    {
      nome: "helenice",
      banco: "NeoBank S.A.",
      id:3
    },
    {
      nome: "orlando",
      banco: "NeoBank S.A.",
      id: 4
    }
  ]

  id: number=0;

  currentClient = {
    nome: "",
    banco: "",
    id: 0
  }

  constructor(private router: Router){}

  selectAccount(id:number){
    this.id = id
  }

  fetchClientData(){
    this.users.map((client)=>{
    if(client.id==this.id){
      this.currentClient = client
    }}
  )
  }

  isPopUpOpen:boolean = false;

  openPopUp(isPopUpOpen:boolean){
    this.isPopUpOpen = !isPopUpOpen;
    this.fetchClientData()
  }

  irParaValor(){
    this.router.navigate(["/transferir/valor"], {
      state: {
        currentClient: this.currentClient
      }
    })
  }

}
