import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiffraisComponent } from './modiffrais.component';

describe('ModiffraisComponent', () => {
  let component: ModiffraisComponent;
  let fixture: ComponentFixture<ModiffraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModiffraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiffraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
