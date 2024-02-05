import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjtreglementactiviteComponent } from './ajtreglementactivite.component';

describe('AjtreglementactiviteComponent', () => {
  let component: AjtreglementactiviteComponent;
  let fixture: ComponentFixture<AjtreglementactiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjtreglementactiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjtreglementactiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
