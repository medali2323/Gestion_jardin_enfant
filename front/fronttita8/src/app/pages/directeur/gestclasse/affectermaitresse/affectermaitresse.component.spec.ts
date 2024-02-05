import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectermaitresseComponent } from './affectermaitresse.component';

describe('AffectermaitresseComponent', () => {
  let component: AffectermaitresseComponent;
  let fixture: ComponentFixture<AffectermaitresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectermaitresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectermaitresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
