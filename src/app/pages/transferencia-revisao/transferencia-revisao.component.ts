import { trigger, transition, style, animate } from '@angular/animations';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-transferencia-revisao',
  imports: [RouterModule],
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

  name:string ="VINICIUS LIMA SANTOS";
  message:string = "";
  
  isPopUpOpen:boolean = false;

  constructor(private location: Location, route: ActivatedRoute){
    this.message=route.snapshot.data['message'];
  }

  voltar(){
    this.location.back();
  }

  openPopUp(isPopUpOpen:boolean){
    this.isPopUpOpen = !isPopUpOpen;
  }
}
