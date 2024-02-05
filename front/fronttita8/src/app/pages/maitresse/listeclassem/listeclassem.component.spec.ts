import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeclassemComponent } from './listeclassem.component';

describe('ListeclassemComponent', () => {
  let component: ListeclassemComponent;
  let fixture: ComponentFixture<ListeclassemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeclassemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeclassemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
