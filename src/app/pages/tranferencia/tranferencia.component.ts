import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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

  isPopUpOpen:boolean = false;

  openPopUp(isPopUpOpen:boolean){
    this.isPopUpOpen = !isPopUpOpen;
  }

}
