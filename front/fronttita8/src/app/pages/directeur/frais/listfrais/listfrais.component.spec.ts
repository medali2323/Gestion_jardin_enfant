import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfraisComponent } from './listfrais.component';

describe('ListfraisComponent', () => {
  let component: ListfraisComponent;
  let fixture: ComponentFixture<ListfraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListfraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
