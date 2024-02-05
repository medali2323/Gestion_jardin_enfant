import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementenfantactiviteComponent } from './payementenfantactivite.component';

describe('PayementenfantactiviteComponent', () => {
  let component: PayementenfantactiviteComponent;
  let fixture: ComponentFixture<PayementenfantactiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayementenfantactiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementenfantactiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
