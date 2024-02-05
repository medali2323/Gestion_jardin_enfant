import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutenfComponent } from './ajoutenf.component';

describe('AjoutenfComponent', () => {
  let component: AjoutenfComponent;
  let fixture: ComponentFixture<AjoutenfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutenfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutenfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
