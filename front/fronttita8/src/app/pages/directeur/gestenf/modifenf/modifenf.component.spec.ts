import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifenfComponent } from './modifenf.component';

describe('ModifenfComponent', () => {
  let component: ModifenfComponent;
  let fixture: ComponentFixture<ModifenfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifenfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifenfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
