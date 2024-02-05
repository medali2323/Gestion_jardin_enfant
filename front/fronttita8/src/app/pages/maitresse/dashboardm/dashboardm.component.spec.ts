import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmComponent } from './dashboardm.component';

describe('DashboardmComponent', () => {
  let component: DashboardmComponent;
  let fixture: ComponentFixture<DashboardmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
