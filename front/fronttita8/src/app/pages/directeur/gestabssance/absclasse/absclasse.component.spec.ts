import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsclasseComponent } from './absclasse.component';

describe('AbsclasseComponent', () => {
  let component: AbsclasseComponent;
  let fixture: ComponentFixture<AbsclasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsclasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
