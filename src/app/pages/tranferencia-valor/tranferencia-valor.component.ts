import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tranferencia-valor',
  imports: [RouterModule],
  templateUrl: './tranferencia-valor.component.html',
  styleUrl: './tranferencia-valor.component.scss'
})
export class TranferenciaValorComponent implements OnInit{

  message:string ="";
  nome: string = "Vinicius Lima Santos";

  value:number = 0.00;

  constructor (
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.message = this.route.snapshot.data['message']
  }
  
  irParaRevisao(){
    this.router.navigate([`/${this.message}/revisao`], {
      state: {user: this.nome, value: this.value}
    })
  }

  addValue(value:number){
    this.value+=value;
  }

  cleanValue(){
    this.value=0;
  }

}
