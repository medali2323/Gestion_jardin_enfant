import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintabsancemaitresseComponent } from './printabsancemaitresse.component';

describe('PrintabsancemaitresseComponent', () => {
  let component: PrintabsancemaitresseComponent;
  let fixture: ComponentFixture<PrintabsancemaitresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintabsancemaitresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintabsancemaitresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
