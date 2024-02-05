import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintabsancebyclasseComponent } from './printabsancebyclasse.component';

describe('PrintabsancebyclasseComponent', () => {
  let component: PrintabsancebyclasseComponent;
  let fixture: ComponentFixture<PrintabsancebyclasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintabsancebyclasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintabsancebyclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
