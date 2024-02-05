import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenfComponent } from './listenf.component';

describe('ListenfComponent', () => {
  let component: ListenfComponent;
  let fixture: ComponentFixture<ListenfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
