import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailenfComponent } from './detailenf.component';

describe('DetailenfComponent', () => {
  let component: DetailenfComponent;
  let fixture: ComponentFixture<DetailenfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailenfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailenfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
