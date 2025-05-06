import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tranferencia-valor',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './tranferencia-valor.component.html',
  styleUrl: './tranferencia-valor.component.scss'
})
export class TranferenciaValorComponent implements OnInit{

  message:string ="";

  data: any;
  valueForm!: FormGroup;

  value:number = 0;

  constructor (
    private route: ActivatedRoute,
    private router: Router
  ){
    this.data = this.router.getCurrentNavigation()?.extras.state
  }

  ngOnInit(): void {
    this.message = this.route.snapshot.data['message']

    this.valueForm= new FormGroup({
      value: new FormControl<number>(0, [Validators.required, Validators.min(0.01)])
    })
  }

  addValue(value:number){
    this.value+=value;
  }

  cleanValue(){
    this.value=0;
  }

  irParaRevisao(){
    this.router.navigate([`/${this.message}/revisao`], {
      state: {currentClient: this.data.currentClient , value: this.value}
    })
  }

}
