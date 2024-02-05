import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMComponent } from './login-m.component';

describe('LoginMComponent', () => {
  let component: LoginMComponent;
  let fixture: ComponentFixture<LoginMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
