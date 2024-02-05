import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjtanneescolaireComponent } from './ajtanneescolaire.component';

describe('AjtanneescolaireComponent', () => {
  let component: AjtanneescolaireComponent;
  let fixture: ComponentFixture<AjtanneescolaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjtanneescolaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjtanneescolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
