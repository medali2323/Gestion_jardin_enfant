import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcubforenfComponent } from './listcubforenf.component';

describe('ListcubforenfComponent', () => {
  let component: ListcubforenfComponent;
  let fixture: ComponentFixture<ListcubforenfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcubforenfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcubforenfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
