import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadekhilComponent } from './madekhil.component';

describe('MadekhilComponent', () => {
  let component: MadekhilComponent;
  let fixture: ComponentFixture<MadekhilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadekhilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadekhilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
