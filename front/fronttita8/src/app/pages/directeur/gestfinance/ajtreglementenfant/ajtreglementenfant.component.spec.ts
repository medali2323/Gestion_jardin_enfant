import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjtreglementenfantComponent } from './ajtreglementenfant.component';

describe('AjtreglementenfantComponent', () => {
  let component: AjtreglementenfantComponent;
  let fixture: ComponentFixture<AjtreglementenfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjtreglementenfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjtreglementenfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
