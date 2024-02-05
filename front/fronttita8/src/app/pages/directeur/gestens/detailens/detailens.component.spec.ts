import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailensComponent } from './detailens.component';

describe('DetailensComponent', () => {
  let component: DetailensComponent;
  let fixture: ComponentFixture<DetailensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
