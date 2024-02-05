import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsclubComponent } from './absclub.component';

describe('AbsclubComponent', () => {
  let component: AbsclubComponent;
  let fixture: ComponentFixture<AbsclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
