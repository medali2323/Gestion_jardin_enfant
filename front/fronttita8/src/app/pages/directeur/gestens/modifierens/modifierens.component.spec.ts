import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierensComponent } from './modifierens.component';

describe('ModifierensComponent', () => {
  let component: ModifierensComponent;
  let fixture: ComponentFixture<ModifierensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
