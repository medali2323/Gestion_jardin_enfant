import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarmComponent } from './sidebarm.component';

describe('SidebarmComponent', () => {
  let component: SidebarmComponent;
  let fixture: ComponentFixture<SidebarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
