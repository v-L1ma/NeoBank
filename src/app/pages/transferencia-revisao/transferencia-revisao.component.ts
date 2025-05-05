import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-transferencia-revisao',
  imports: [RouterModule, CommonModule],
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
  data: any;
  date:number = Date.now();
  
  isPopUpOpen:boolean = false;

  constructor(private location: Location, private route: ActivatedRoute, private router: Router){
    this.message=route.snapshot.data['message'];
    this.data = router.getCurrentNavigation()?.extras.state;
  }

  voltar(){
    this.location.back();
  }

  openPopUp(isPopUpOpen:boolean){
    this.isPopUpOpen = !isPopUpOpen;
  }
}
