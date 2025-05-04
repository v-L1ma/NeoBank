import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tranferencia-valor',
  imports: [RouterModule],
  templateUrl: './tranferencia-valor.component.html',
  styleUrl: './tranferencia-valor.component.scss'
})
export class TranferenciaValorComponent implements OnInit{

  message:string ="";

  value:number = 0.00;

  constructor (
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.message = this.route.snapshot.data['message']
  }
  

  addValue(value:number){
    this.value+=value;
  }

  cleanValue(){
    this.value=0;
  }

}
