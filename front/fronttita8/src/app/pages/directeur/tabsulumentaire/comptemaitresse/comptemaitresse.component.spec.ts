import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptemaitresseComponent } from './comptemaitresse.component';

describe('ComptemaitresseComponent', () => {
  let component: ComptemaitresseComponent;
  let fixture: ComponentFixture<ComptemaitresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptemaitresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptemaitresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
