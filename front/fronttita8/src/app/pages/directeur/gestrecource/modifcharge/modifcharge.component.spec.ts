import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifchargeComponent } from './modifcharge.component';

describe('ModifchargeComponent', () => {
  let component: ModifchargeComponent;
  let fixture: ComponentFixture<ModifchargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifchargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
