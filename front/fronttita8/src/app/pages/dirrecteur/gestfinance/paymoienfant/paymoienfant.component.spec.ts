import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymoienfantComponent } from './paymoienfant.component';

describe('PaymoienfantComponent', () => {
  let component: PaymoienfantComponent;
  let fixture: ComponentFixture<PaymoienfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymoienfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymoienfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
