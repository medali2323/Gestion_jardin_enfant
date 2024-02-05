import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteparentsComponent } from './compteparents.component';

describe('CompteparentsComponent', () => {
  let component: CompteparentsComponent;
  let fixture: ComponentFixture<CompteparentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteparentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteparentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
