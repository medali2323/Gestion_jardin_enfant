import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootermComponent } from './footerm.component';

describe('FootermComponent', () => {
  let component: FootermComponent;
  let fixture: ComponentFixture<FootermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
