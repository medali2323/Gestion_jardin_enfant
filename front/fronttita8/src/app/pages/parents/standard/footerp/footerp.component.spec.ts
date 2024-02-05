import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterpComponent } from './footerp.component';

describe('FooterpComponent', () => {
  let component: FooterpComponent;
  let fixture: ComponentFixture<FooterpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
