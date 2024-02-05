import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierclubComponent } from './modifierclub.component';

describe('ModifierclubComponent', () => {
  let component: ModifierclubComponent;
  let fixture: ComponentFixture<ModifierclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
