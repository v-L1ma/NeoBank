import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm!: FormGroup;

  ngOnInit():void{
    this.signupForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  get name(){
    return this.signupForm.get('name')
  }

  get email(){
    return this.signupForm.get('email')
  }

  get password(){
    return this.signupForm.get('password')
  }

  submit(){
    console.log(this.signupForm.value)
  }

}
