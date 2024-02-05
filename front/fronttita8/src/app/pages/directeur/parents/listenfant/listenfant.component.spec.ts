import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenfantComponent } from './listenfant.component';

describe('ListenfantComponent', () => {
  let component: ListenfantComponent;
  let fixture: ComponentFixture<ListenfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
