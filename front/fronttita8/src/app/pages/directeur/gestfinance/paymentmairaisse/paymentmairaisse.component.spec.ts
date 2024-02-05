import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentmairaisseComponent } from './paymentmairaisse.component';

describe('PaymentmairaisseComponent', () => {
  let component: PaymentmairaisseComponent;
  let fixture: ComponentFixture<PaymentmairaisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentmairaisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmairaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
