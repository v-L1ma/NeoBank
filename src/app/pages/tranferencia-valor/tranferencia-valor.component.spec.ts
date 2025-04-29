import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferenciaValorComponent } from './tranferencia-valor.component';

describe('TranferenciaValorComponent', () => {
  let component: TranferenciaValorComponent;
  let fixture: ComponentFixture<TranferenciaValorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranferenciaValorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranferenciaValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
