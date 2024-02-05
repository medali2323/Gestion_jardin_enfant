import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listenf2Component } from './listenf2.component';

describe('Listenf2Component', () => {
  let component: Listenf2Component;
  let fixture: ComponentFixture<Listenf2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listenf2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listenf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
