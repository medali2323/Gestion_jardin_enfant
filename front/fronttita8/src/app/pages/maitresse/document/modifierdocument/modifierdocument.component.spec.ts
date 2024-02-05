import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierdocumentComponent } from './modifierdocument.component';

describe('ModifierdocumentComponent', () => {
  let component: ModifierdocumentComponent;
  let fixture: ComponentFixture<ModifierdocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierdocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
