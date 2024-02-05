import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinforparentComponent } from './prinforparent.component';

describe('PrinforparentComponent', () => {
  let component: PrinforparentComponent;
  let fixture: ComponentFixture<PrinforparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinforparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinforparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
