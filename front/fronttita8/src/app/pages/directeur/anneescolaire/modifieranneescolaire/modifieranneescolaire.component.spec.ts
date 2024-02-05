import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieranneescolaireComponent } from './modifieranneescolaire.component';

describe('ModifieranneescolaireComponent', () => {
  let component: ModifieranneescolaireComponent;
  let fixture: ComponentFixture<ModifieranneescolaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifieranneescolaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieranneescolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
