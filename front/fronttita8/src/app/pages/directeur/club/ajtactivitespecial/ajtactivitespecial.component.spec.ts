import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjtactivitespecialComponent } from './ajtactivitespecial.component';

describe('AjtactivitespecialComponent', () => {
  let component: AjtactivitespecialComponent;
  let fixture: ComponentFixture<AjtactivitespecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjtactivitespecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjtactivitespecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
