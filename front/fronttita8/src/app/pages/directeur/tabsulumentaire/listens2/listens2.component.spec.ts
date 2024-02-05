import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listens2Component } from './listens2.component';

describe('Listens2Component', () => {
  let component: Listens2Component;
  let fixture: ComponentFixture<Listens2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listens2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listens2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
