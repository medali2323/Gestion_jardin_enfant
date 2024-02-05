import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListactiviteComponent } from './listactivite.component';

describe('ListactiviteComponent', () => {
  let component: ListactiviteComponent;
  let fixture: ComponentFixture<ListactiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListactiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListactiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
