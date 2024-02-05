import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintresumeComponent } from './printresume.component';

describe('PrintresumeComponent', () => {
  let component: PrintresumeComponent;
  let fixture: ComponentFixture<PrintresumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintresumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
