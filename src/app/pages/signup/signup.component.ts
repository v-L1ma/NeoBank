import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SignupService } from '../../services/signup/signup.service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm!: FormGroup;
  today:string;

  constructor(private signupService: SignupService, private router: Router){
    const data = new Date();
    this.today = data.toJSON().slice(0,10);
  }

  ngOnInit():void{
    this.signupForm = new FormGroup({
      name: new FormControl("", Validators.required),
      birthday: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(3)])
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

  get birthday(){
    return this.signupForm.get('birthday')
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
