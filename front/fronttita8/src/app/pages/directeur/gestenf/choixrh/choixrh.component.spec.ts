import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixrhComponent } from './choixrh.component';

describe('ChoixrhComponent', () => {
  let component: ChoixrhComponent;
  let fixture: ComponentFixture<ChoixrhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixrhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
