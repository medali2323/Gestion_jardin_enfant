import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfreglementComponent } from './mdfreglement.component';

describe('MdfreglementComponent', () => {
  let component: MdfreglementComponent;
  let fixture: ComponentFixture<MdfreglementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdfreglementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfreglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
