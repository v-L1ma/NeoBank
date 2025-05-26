import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-areapix',
  imports: [MatIconModule, RouterModule],
  templateUrl: './areapix.component.html',
  styleUrl: './areapix.component.scss',
  animations: [
    trigger('subirAnimacao', [
      transition(':enter', [ 
        style({ opacity: .5, transform: 'translateY(180px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AreapixComponent {

  isPopUpOpen:boolean = true;

  popUpActive:number = 1;

  openPopUp(isPopUpOpen:boolean){
    this.isPopUpOpen = !isPopUpOpen;
  }

  nextPopUp(){
    this.popUpActive=2;
  }

  previousPopUp(){
    this.popUpActive=1;
  }

}
