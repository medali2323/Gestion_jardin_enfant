import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentenfantComponent } from './paymentenfant.component';

describe('PaymentenfantComponent', () => {
  let component: PaymentenfantComponent;
  let fixture: ComponentFixture<PaymentenfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentenfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentenfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
