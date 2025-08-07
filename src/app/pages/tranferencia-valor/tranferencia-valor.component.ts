import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TUser } from '../../types/TUser';

@Component({
  selector: 'app-tranferencia-valor',
  imports: [ReactiveFormsModule, RouterModule, NgxMaskDirective],
  providers: [
    provideNgxMask(),
  ],
  templateUrl: './tranferencia-valor.component.html',
  styleUrl: './tranferencia-valor.component.scss'
})
export class TranferenciaValorComponent implements OnInit{

  message:string ="";

  data: any;
  valueForm!: FormGroup;
  currentClient!: TUser;

  constructor (
    private route: ActivatedRoute,
    private router: Router
  ){
    this.data = this.router.getCurrentNavigation()?.extras.state
    this.currentClient = this.data.currentClient
  }

  ngOnInit(): void {
    this.message = this.route.snapshot.data['message']

    this.valueForm= new FormGroup({
      value: new FormControl<number>(0, [Validators.required, Validators.min(0.01)])
    })
  }

  get getValue(){
    return this.valueForm.get('value')!
  }

  addValue(value:number){
    const currentValue = this.getValue.value ?? 0
    this.getValue.setValue(currentValue+value)
  }

  cleanValue(){
    this.getValue.setValue(0)
  }

  irParaRevisao(){
    this.router.navigate([`/${this.message}/revisao`], {
      state: {currentClient: this.currentClient , value: this.getValue.value}
    })
  }

}
