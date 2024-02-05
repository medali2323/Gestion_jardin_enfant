import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercomptemComponent } from './modifiercomptem.component';

describe('ModifiercomptemComponent', () => {
  let component: ModifiercomptemComponent;
  let fixture: ComponentFixture<ModifiercomptemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiercomptemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiercomptemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
