import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  ngOnInit():void {

  this.loginForm = new FormGroup({
    email : new FormControl<String>("", [Validators.required, Validators.minLength(5)]),
    password : new FormControl<String>("",[Validators.required, Validators.minLength(5)])
  });
  }

  get email(){
    return this.loginForm.get('email')!
  }

  get password(){
    return this.loginForm.get('password')!
  }

  submit(){
    console.log(this.loginForm.value)
  }

}
