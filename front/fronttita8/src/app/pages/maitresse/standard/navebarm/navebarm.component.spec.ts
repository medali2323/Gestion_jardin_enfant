import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavebarmComponent } from './navebarm.component';

describe('NavebarmComponent', () => {
  let component: NavebarmComponent;
  let fixture: ComponentFixture<NavebarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavebarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavebarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
