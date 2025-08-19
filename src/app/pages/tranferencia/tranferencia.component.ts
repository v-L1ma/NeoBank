import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FetchClienteInfoByPixService } from '../../services/fetch-cliente-info-by-pix.service';
import { ModalComponent } from "../../components/modal/modal/modal.component";

interface IContacts {
  nome: string;
  pix: string;
  banco: string;
}

@Component({
  selector: 'app-tranferencia',
  imports: [ReactiveFormsModule, RouterModule, ModalComponent],
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
  
  contacts : IContacts[] = [];

  chave: string = "";
  chaveForm!: FormGroup;
  
  isPopUpOpen:boolean = false;
  isModalOpen:boolean = false;

  modalMessage:string="";
  modalStatus:string="";

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

    const storedContacts = localStorage.getItem("recentsContacts");

    this.contacts = storedContacts ? JSON.parse(storedContacts) : [];    
  }

  get getChave(){
    return this.chaveForm.get('chave')!
  }

  selectAccount(id: string){
    this.chave = id
  }

  fetchClientData(id:string){
    //this.contacts.map((client)=>{
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
      error: (error)=>{
        console.log("Houve um erro, ", error);
        this.openModal(error.message, "error");
      }
    });
  }

  openPopUp(isPopUpOpen:boolean){
    this.fetchClientData(this.chave)
    this.isPopUpOpen = !isPopUpOpen;
  }

  openModal(message:string,status:string){
    this.modalMessage=message;
    this.modalStatus=status
    this.isModalOpen = !this.isModalOpen;
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

        if(!this.contacts.includes(this.currentClient)){
          this.contacts.push(this.currentClient);
          localStorage.setItem("recentsContacts", JSON.stringify(this.contacts));
        }    

        this.isPopUpOpen=!this.isPopUpOpen
      },
      error: (error)=>{
        console.log(error);
        this.openModal(error.error, "error");
      }
    });
  }

  irParaValor(){
    this.router.navigate(["/transferir/valor"], {
      state: {
        currentClient: this.currentClient
      }
    })
  }

}
