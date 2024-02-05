import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintclasseeComponent } from './printclassee.component';

describe('PrintclasseeComponent', () => {
  let component: PrintclasseeComponent;
  let fixture: ComponentFixture<PrintclasseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintclasseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintclasseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
