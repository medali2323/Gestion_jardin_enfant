import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailanneeComponent } from './detailannee.component';

describe('DetailanneeComponent', () => {
  let component: DetailanneeComponent;
  let fixture: ComponentFixture<DetailanneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailanneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailanneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
