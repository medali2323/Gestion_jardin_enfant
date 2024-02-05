import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailniveauComponent } from './detailniveau.component';

describe('DetailniveauComponent', () => {
  let component: DetailniveauComponent;
  let fixture: ComponentFixture<DetailniveauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailniveauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailniveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
