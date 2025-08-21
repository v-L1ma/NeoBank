import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule, Location } from '@angular/common';
import { LocalizedString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TransferirService } from '../../services/transferir/transferir.service';
import { Observable } from 'rxjs';
import { ModalComponent } from "../../components/modal/modal/modal.component";

interface IuserInfo {
  balance: string;
  id: string;
}

@Component({
  selector: 'app-transferencia-revisao',
  imports: [RouterModule, CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './transferencia-revisao.component.html',
  styleUrl: './transferencia-revisao.component.scss',
  animations: [
    trigger('subirAnimacao', [
      transition(':enter', [
        style({ opacity: .5, transform: 'translateY(180px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class TransferenciaRevisaoComponent implements OnInit {

  message: string = "";
  data: any;
  date: number = Date.now();
  passwordForm!: FormGroup;
  userInfo: IuserInfo;
  transferirRequest: any;
  modalMessage:string="";
  modalStatus:string="";

  isModalOpen:boolean=false;
  isPopUpOpen: boolean = false;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private transferirService: TransferirService
  ) {
    this.message = route.snapshot.data['message'];
    this.data = router.getCurrentNavigation()?.extras.state;

    const localStorageInfo = localStorage.getItem("userInfo");
    this.userInfo = localStorageInfo ? JSON.parse(localStorageInfo) : null;

  }
  ngOnInit(): void {
    this.passwordForm = new FormGroup({
      password: new FormControl<String>("", [Validators.required, Validators.minLength(6)])
    });

  }

  voltar() {
    this.location.back();
  }

  openPopUp() {
    this.isPopUpOpen = !this.isPopUpOpen;
  }

  openModal(message:string,status:string){
    this.modalMessage=message;
    this.modalStatus=status
    this.isModalOpen = !this.isModalOpen;
  }

  get password() {
    return this.passwordForm.get('password')!
  }

  submit(): void {

    switch (this.message) {
      case "transferir":
        this.transferirRequest = {
          "senderId": this.userInfo.id,
          "chavePix": this.data.currentClient.pix,
          "value": this.data.value,
          "password": this.password.value
        }
        this.openPopUp()
        console.log(this.transferirRequest)

        this.transferirService.transferir(this.transferirRequest, this.message).subscribe({
          next: (response)=>{
            console.log("Transferencia concluida com exito!");
            this.openModal(response.message,"sucesso")
          },
          error: (error)=>{
            console.log("Houve um erro!", error);
            this.openModal(error.error,"erro")
          }
        })

        break;

      case "sacar":
        this.transferirRequest ={
          "clienteId": this.userInfo.id,
          "value": this.data.value,
          "password": this.password.value
        }
        this.transferirService.transferir(this.transferirRequest, this.message).subscribe({
          next: (response)=>{
            console.log("Transferencia concluida com exito!");
            this.openModal(response.message,"sucesso")
          },
          error: (error)=>{
            console.log("Houve um erro!", error);
            this.openModal(error.error,"erro")
          }
        })
        break;

      case "depositar":
        this.transferirRequest = {
          "clienteId": this.userInfo.id,
          "value": this.data.value,
        }
        this.transferirService.transferir(this.transferirRequest, this.message).subscribe({
          next: (response)=>{
            console.log("Transferencia concluida com exito!");
            this.openModal(response.message,"sucesso")
          },
          error: (error)=>{
            console.log("Houve um erro!", error);
            this.openModal(error.error,"erro")
          }
        });
        break;

      case "cobrar":
        this.transferirRequest = {
          "receiverId": this.data.currentClient.id,
          "value": this.data.value,
        }
        this.transferirService.transferir(this.transferirRequest, this.message).subscribe({
          next: (response)=>{
            console.log("Transferencia concluida com exito!");
            this.openModal(response.message,"sucesso")
          },
          error: (error)=>{
            console.log("Houve um erro!", error);
            this.openModal(error.error,"erro")
          }
        });
        break;

      default:
        break;
    }

  }

}
