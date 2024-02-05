import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierclasseComponent } from './modifierclasse.component';

describe('ModifierclasseComponent', () => {
  let component: ModifierclasseComponent;
  let fixture: ComponentFixture<ModifierclasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierclasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
