import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tranferencia',
  imports: [ReactiveFormsModule ,RouterModule],
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
export class TranferenciaComponent implements OnInit {
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

  id: number | string =0;
  chaveForm!: FormGroup;

  currentClient = {
    nome: "",
    banco: "",
    id: 0
  }

  constructor(private router: Router){}


  ngOnInit(): void {
    this.chaveForm = new FormGroup({
      chave: new FormControl<string>("", [Validators.required, Validators.minLength(11)])
    })
  }

  get getChave(){
    return this.chaveForm.get('chave')!
  }

  selectAccount(id:number | string){
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
    this.fetchClientData()
    this.isPopUpOpen = !isPopUpOpen;
  }

  searchNewReceiver(){
    const chave = this.getChave.value
    this.selectAccount(chave)
    this.currentClient.id = chave
    this.isPopUpOpen=!this.isPopUpOpen
  }

  irParaValor(){
    this.router.navigate(["/transferir/valor"], {
      state: {
        currentClient: this.currentClient
      }
    })
  }

}
