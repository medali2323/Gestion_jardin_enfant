import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdocumentsComponent } from './listdocuments.component';

describe('ListdocumentsComponent', () => {
  let component: ListdocumentsComponent;
  let fixture: ComponentFixture<ListdocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
