import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TUser } from '../../types/TUser';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-transferencia-revisao',
  imports: [RouterModule, CommonModule,ReactiveFormsModule],
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
export class TransferenciaRevisaoComponent {

  currentClient!: TUser;

  message:string = "";
  data: any;
  date:number = Date.now();
  userInfo!: TUser;
  SenhaForm!: FormGroup;
  
  isPopUpOpen:boolean = false;

  transacaoRequest:any;

  constructor(private location: Location, private route: ActivatedRoute, private router: Router){
    this.message=route.snapshot.data['message'];
    this.data = router.getCurrentNavigation()?.extras.state;
    this.currentClient = this.data.currentClient

    this.userInfo = JSON.parse(localStorage.getItem('userInfo')!);
    
    this.SenhaForm = new FormGroup({
      senha: new FormControl<string>("", [Validators.required, Validators.minLength(3)])
    })
  }

  get getSenha(){
    return this.SenhaForm.get('senha')!
  }

  voltar(){
    this.location.back();
  }

  openPopUp(isPopUpOpen:boolean){
    this.isPopUpOpen = !isPopUpOpen;
  }

  sendTransacao(){
    this.transacaoRequest = {
      senderId: this.userInfo.id,
      chavePix: this.currentClient.chavePix,
      value: this.data.value,
      password: this.getSenha.value
    }

    console.log(this.transacaoRequest)
  }
}
