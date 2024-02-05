import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutclubComponent } from './ajoutclub.component';

describe('AjoutclubComponent', () => {
  let component: AjoutclubComponent;
  let fixture: ComponentFixture<AjoutclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
