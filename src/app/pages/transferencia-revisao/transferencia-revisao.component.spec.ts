import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaRevisaoComponent } from './transferencia-revisao.component';

describe('TransferenciaRevisaoComponent', () => {
  let component: TransferenciaRevisaoComponent;
  let fixture: ComponentFixture<TransferenciaRevisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferenciaRevisaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferenciaRevisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
