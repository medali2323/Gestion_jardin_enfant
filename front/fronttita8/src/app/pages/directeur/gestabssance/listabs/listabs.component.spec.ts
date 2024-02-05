import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListabsComponent } from './listabs.component';

describe('ListabsComponent', () => {
  let component: ListabsComponent;
  let fixture: ComponentFixture<ListabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
