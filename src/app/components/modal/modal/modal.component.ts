import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  constructor(private router: Router){

  }

  @Input({required:true}) message:string = "";
  @Input({required:true}) status:string = "";
  @Output() fecharModal = new EventEmitter<void>();

  fechar(){
    this.fecharModal.emit()
    this.router.navigate(['/painel'])
  }
}
