import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardpComponent } from './dashboardp.component';

describe('DashboardpComponent', () => {
  let component: DashboardpComponent;
  let fixture: ComponentFixture<DashboardpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
