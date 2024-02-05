import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintabsclasseComponent } from './printabsclasse.component';

describe('PrintabsclasseComponent', () => {
  let component: PrintabsclasseComponent;
  let fixture: ComponentFixture<PrintabsclasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintabsclasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintabsclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
