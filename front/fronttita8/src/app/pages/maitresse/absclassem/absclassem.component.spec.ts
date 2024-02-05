import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsclassemComponent } from './absclassem.component';

describe('AbsclassemComponent', () => {
  let component: AbsclassemComponent;
  let fixture: ComponentFixture<AbsclassemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsclassemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsclassemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
