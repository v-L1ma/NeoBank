import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FetchClienteInfoByPixService } from '../../services/fetch-cliente-info-by-pix.service';

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
  users = [ {
    nome: "vinicius",
    pix: "vinicius@hotmail.com",
    banco: "NeoBank S.A.",
    id: "1"
  },
  {
    nome: "vanuza",
    pix: "vinicius@hotmail.com",
    banco: "NeoBank S.A.",
    id:"2"
  },
  {
    nome: "helenice",
    pix: "vinicius@hotmail.com",
    banco: "NeoBank S.A.",
    id:"3"
  },
  {
    nome: "orlando",
    pix: "vinicius@hotmail.com",
    banco: "NeoBank S.A.",
    id: "4"
  }]

  id: string = "";
  chaveForm!: FormGroup;

  currentClient = {
    nome: "",
    banco: "",
    pix: "",
    id: ""
  }

  constructor(private router: Router, private fetchService: FetchClienteInfoByPixService){}

  ngOnInit(): void {
    this.chaveForm = new FormGroup({
      chave: new FormControl<string>("", [Validators.required, Validators.minLength(11)])
    });

    this.users = JSON.parse(localStorage.getItem("recentReceivers")!);    
  }

  get getChave(){
    return this.chaveForm.get('chave')!
  }

  selectAccount(id: string){
    this.id = id
  }

  fetchClientData(id:string){
    //this.users.map((client)=>{
    //if(client.id==this.id){
      //this.currentClient = client
    //}}
    //)
    this.fetchService.fetch(id).subscribe({
      next: (response) => {
        console.log(response);
        this.currentClient.id = response.id
        this.currentClient.nome = response.name;
        this.currentClient.pix = id;
        this.currentClient.banco = "NeoBank S.A.";
      }
      ,
      error: (error)=> console.log("Houve um erro, ", error)
    });
  }

  isPopUpOpen:boolean = false;

  openPopUp(isPopUpOpen:boolean){
    this.fetchClientData(this.id)
    this.isPopUpOpen = !isPopUpOpen;
  }

  searchNewReceiver(){
    const chave = this.getChave.value
    this.selectAccount(chave)
    this.fetchService.fetch(chave).subscribe({
      next: (response)=>{
        console.log(response);
        this.currentClient.id = response.id
        this.currentClient.nome = response.name;
        this.currentClient.pix = chave;
        this.currentClient.banco = "NeoBank S.A.";
      },
      error: (error)=>{
        console.log(error);
      }
    });

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
