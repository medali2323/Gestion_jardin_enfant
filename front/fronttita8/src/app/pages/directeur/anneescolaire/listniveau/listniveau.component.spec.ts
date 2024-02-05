import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListniveauComponent } from './listniveau.component';

describe('ListniveauComponent', () => {
  let component: ListniveauComponent;
  let fixture: ComponentFixture<ListniveauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListniveauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListniveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
