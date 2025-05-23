import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm!: FormGroup;

  constructor(private signupService: SignupService, private router: Router){}

  ngOnInit():void{
    this.signupForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      birthday: new FormControl(Date, [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(3)])
    });
  }

  get name(){
    return this.signupForm.get('name')
  }

  get email(){
    return this.signupForm.get('email')
  }

  get birthday(){
    return this.signupForm.get('birthday')
  }

  get password(){
    return this.signupForm.get('password')
  }

  signup():void{
    this.signupService.signup(this.signupForm.value).subscribe({
      next: (Response)=>{
        console.log("Cadastro bem-sucedido:", Response)
      },
      error: (error) => {
        console.log("Houve um erro na requisição:", error)
      }
    });
  }

  submit(){
    console.log(this.signupForm.value)
    this.signup();

  }

}
