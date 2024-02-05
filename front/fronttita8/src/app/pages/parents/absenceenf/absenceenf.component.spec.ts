import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceenfComponent } from './absenceenf.component';

describe('AbsenceenfComponent', () => {
  let component: AbsenceenfComponent;
  let fixture: ComponentFixture<AbsenceenfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenceenfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenceenfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
