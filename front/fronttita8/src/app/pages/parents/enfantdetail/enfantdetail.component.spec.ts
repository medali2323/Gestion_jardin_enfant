import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantdetailComponent } from './enfantdetail.component';

describe('EnfantdetailComponent', () => {
  let component: EnfantdetailComponent;
  let fixture: ComponentFixture<EnfantdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfantdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
