import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintensComponent } from './printens.component';

describe('PrintensComponent', () => {
  let component: PrintensComponent;
  let fixture: ComponentFixture<PrintensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
