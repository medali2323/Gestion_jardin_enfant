import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeclubComponent } from './listeclub.component';

describe('ListeclubComponent', () => {
  let component: ListeclubComponent;
  let fixture: ComponentFixture<ListeclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
