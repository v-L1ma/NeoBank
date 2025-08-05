import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  error: boolean = false;

  constructor(private loginService: LoginService, private router: Router){
  }

  ngOnInit():void {

  this.loginForm = new FormGroup({
    email : new FormControl<String>("", [Validators.required, Validators.minLength(5),Validators.email]),
    password : new FormControl<String>("",[Validators.required, Validators.minLength(5)])
  });
  }

  get email(){
    return this.loginForm.get('email')!
  }

  get password(){
    return this.loginForm.get('password')!
  }

  getLogin(): void {
    this.loginService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido:', response);
        localStorage.setItem('token', response.token)
        localStorage.setItem('userInfo', JSON.stringify(response.user));
        this.router.navigate(["/painel"]);
      },
      error: (error) => {
        console.error('Erro na requisição:', error);
        this.error = true;
      }
    });
  }

  submit():void{
    console.log(this.loginForm.value)
    this.getLogin();
  }

}
