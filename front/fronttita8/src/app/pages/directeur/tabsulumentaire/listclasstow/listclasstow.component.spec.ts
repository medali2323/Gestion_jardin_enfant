import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListclasstowComponent } from './listclasstow.component';

describe('ListclasstowComponent', () => {
  let component: ListclasstowComponent;
  let fixture: ComponentFixture<ListclasstowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListclasstowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListclasstowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
