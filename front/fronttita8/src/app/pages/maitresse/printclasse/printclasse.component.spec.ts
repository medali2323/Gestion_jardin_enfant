import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintclasseComponent } from './printclasse.component';

describe('PrintclasseComponent', () => {
  let component: PrintclasseComponent;
  let fixture: ComponentFixture<PrintclasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintclasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
