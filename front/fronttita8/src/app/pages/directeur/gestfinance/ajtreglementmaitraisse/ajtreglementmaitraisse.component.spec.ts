import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjtreglementmaitraisseComponent } from './ajtreglementmaitraisse.component';

describe('AjtreglementmaitraisseComponent', () => {
  let component: AjtreglementmaitraisseComponent;
  let fixture: ComponentFixture<AjtreglementmaitraisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjtreglementmaitraisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjtreglementmaitraisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
