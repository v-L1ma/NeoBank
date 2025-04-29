import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tranferencia-valor',
  imports: [RouterModule],
  templateUrl: './tranferencia-valor.component.html',
  styleUrl: './tranferencia-valor.component.scss'
})
export class TranferenciaValorComponent {

  value:number = 0.00;

  addValue(value:number){
    this.value+=value;
  }

  cleanValue(){
    this.value=0;
  }

}
