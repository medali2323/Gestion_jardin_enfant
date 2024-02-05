import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintreglementComponent } from './printreglement.component';

describe('PrintreglementComponent', () => {
  let component: PrintreglementComponent;
  let fixture: ComponentFixture<PrintreglementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintreglementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintreglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
