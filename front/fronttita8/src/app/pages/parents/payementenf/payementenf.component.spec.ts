import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementenfComponent } from './payementenf.component';

describe('PayementenfComponent', () => {
  let component: PayementenfComponent;
  let fixture: ComponentFixture<PayementenfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayementenfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementenfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
