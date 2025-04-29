import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tranferencia',
  imports: [RouterModule],
  templateUrl: './tranferencia.component.html',
  styleUrl: './tranferencia.component.scss'
})
export class TranferenciaComponent {

  isPopUpOpen:boolean = false;

  openPopUp(isPopUpOpen:boolean){
    this.isPopUpOpen = !isPopUpOpen;
  }

}
