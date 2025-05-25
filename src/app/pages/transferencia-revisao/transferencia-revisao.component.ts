import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule, Location } from '@angular/common';
import { LocalizedString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TransferirService } from '../../services/transferir/transferir.service';

interface IuserInfo {
  balance: string;
  id: string;
}

@Component({
  selector: 'app-transferencia-revisao',
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './transferencia-revisao.component.html',
  styleUrl: './transferencia-revisao.component.scss',
  animations: [
    trigger('subirAnimacao', [
      transition(':enter', [
        style({ opacity: .5, transform: 'translateY(180px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class TransferenciaRevisaoComponent implements OnInit {

  message: string = "";
  data: any;
  date: number = Date.now();
  passwordForm!: FormGroup;
  userInfo: IuserInfo;

  isPopUpOpen: boolean = false;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private transferirService: TransferirService
  ) {
    this.message = route.snapshot.data['message'];
    this.data = router.getCurrentNavigation()?.extras.state;

    const localStorageInfo = localStorage.getItem("userInfo");
    this.userInfo = localStorageInfo ? JSON.parse(localStorageInfo) : null;

  }
  ngOnInit(): void {
    this.passwordForm = new FormGroup({
      password: new FormControl<String>("", [Validators.required, Validators.minLength(6)])
    });

  }

  voltar() {
    this.location.back();
  }

  openPopUp(isPopUpOpen: boolean) {
    this.isPopUpOpen = !isPopUpOpen;
  }

  get password() {
    return this.passwordForm.get('password')!
  }

  submit(): void {

    switch (this.message) {
      case "transferir":
        const transferirRequest = {
          "senderId": this.userInfo.id,
          "chavePix": this.data.currentClient.pix,
          "value": this.data.value,
          "password": this.password.value
        }

        const response = this.transferirService.transferir(transferirRequest);
        break;

      case "sacar":
        console.log("Not implemented");
        break;

      case "depositar":
        console.log("Not implemented");
        break;

      case "cobrar":
        console.log("Not implemented");
        break;

      case "pagar":
        console.log("Not implemented");
        break;

      default:
        break;
    }

  }

}
