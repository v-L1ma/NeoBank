import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreapixComponent } from './areapix.component';

describe('AreapixComponent', () => {
  let component: AreapixComponent;
  let fixture: ComponentFixture<AreapixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreapixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreapixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
