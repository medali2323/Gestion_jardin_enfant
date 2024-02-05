import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecouceComponent } from './recouce.component';

describe('RecouceComponent', () => {
  let component: RecouceComponent;
  let fixture: ComponentFixture<RecouceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecouceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecouceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
