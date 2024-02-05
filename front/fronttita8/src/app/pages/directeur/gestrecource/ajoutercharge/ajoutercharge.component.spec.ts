import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterchargeComponent } from './ajoutercharge.component';

describe('AjouterchargeComponent', () => {
  let component: AjouterchargeComponent;
  let fixture: ComponentFixture<AjouterchargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterchargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
