import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FetchbypixService } from '../../services/fetchbypix/fetchbypix.service';
import { TUser } from '../../types/TUser';

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
  users: TUser[] = []

  chavePix: string ="";
  chaveForm!: FormGroup;

  currentClient: TUser = {
    name: "",
    email: "NeoBank S.A.",
    chavePix: "",
    id: ""
  }

  constructor(private router: Router, private fetchByPixService: FetchbypixService){}


  ngOnInit(): void {
    this.chaveForm = new FormGroup({
      chave: new FormControl<string>("", [Validators.required, Validators.minLength(11)])
    })
    const localUsers = localStorage.getItem("recentReceivers")!
    if(localUsers){
      this.users = JSON.parse(localUsers)
    }
  }

  get getChave(){
    return this.chaveForm.get('chave')!
  }

  selectAccount(chavePix: string){
    this.chavePix = chavePix;
  }

  fetchClientData(chave:string){
    if(this.users.length>0){
      this.users.map((client)=>{
      if(client.chavePix==this.chavePix){
        this.currentClient = client
      }})
    }
    this.fetchByPixService.fetch(chave).subscribe({
      next:(response)=>{
        this.currentClient.name = response.name;
        this.currentClient.id = response.id;
        this.currentClient.chavePix = chave;
        console.log(response)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  isPopUpOpen:boolean = false;

  openPopUp(isPopUpOpen:boolean){
    this.fetchClientData(this.chavePix);
    this.isPopUpOpen = !isPopUpOpen;
  }

  searchNewReceiver(){
    const chave = this.getChave.value
    this.selectAccount(chave)
    this.fetchClientData(chave);
    this.currentClient.id = chave
    this.isPopUpOpen=!this.isPopUpOpen
  }

  irParaValor(){
    let isReceiverSaved = false;

    for (let index = 0; index < this.users.length; index++) {
      if(this.users[index].id == this.currentClient.id){
        isReceiverSaved=true;
      }      
    }

    if(!isReceiverSaved){
      this.users.push(this.currentClient)
      localStorage.setItem("recentReceivers", JSON.stringify(this.users))
    }

    this.router.navigate(["/transferir/valor"], {
      state: {
        currentClient: this.currentClient
      }
    })
  }

}
