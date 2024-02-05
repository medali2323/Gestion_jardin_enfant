import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcubforenfComponent } from './ajoutcubforenf.component';

describe('AjoutcubforenfComponent', () => {
  let component: AjoutcubforenfComponent;
  let fixture: ComponentFixture<AjoutcubforenfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutcubforenfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutcubforenfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
