import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListensComponent } from './listens.component';

describe('ListensComponent', () => {
  let component: ListensComponent;
  let fixture: ComponentFixture<ListensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
