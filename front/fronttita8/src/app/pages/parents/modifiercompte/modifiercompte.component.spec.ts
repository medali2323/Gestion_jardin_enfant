import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercompteComponent } from './modifiercompte.component';

describe('ModifiercompteComponent', () => {
  let component: ModifiercompteComponent;
  let fixture: ComponentFixture<ModifiercompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiercompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiercompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
