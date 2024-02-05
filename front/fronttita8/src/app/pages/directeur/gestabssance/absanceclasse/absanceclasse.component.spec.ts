import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsanceclasseComponent } from './absanceclasse.component';

describe('AbsanceclasseComponent', () => {
  let component: AbsanceclasseComponent;
  let fixture: ComponentFixture<AbsanceclasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsanceclasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsanceclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
