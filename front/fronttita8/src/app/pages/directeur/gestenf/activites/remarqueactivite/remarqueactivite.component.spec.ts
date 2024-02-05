import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarqueactiviteComponent } from './remarqueactivite.component';

describe('RemarqueactiviteComponent', () => {
  let component: RemarqueactiviteComponent;
  let fixture: ComponentFixture<RemarqueactiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemarqueactiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarqueactiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
