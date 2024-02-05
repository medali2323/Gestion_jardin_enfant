import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintreglementactComponent } from './printreglementact.component';

describe('PrintreglementactComponent', () => {
  let component: PrintreglementactComponent;
  let fixture: ComponentFixture<PrintreglementactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintreglementactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintreglementactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
