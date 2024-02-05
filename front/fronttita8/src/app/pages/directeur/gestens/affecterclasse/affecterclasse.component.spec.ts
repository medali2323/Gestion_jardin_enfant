import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterclasseComponent } from './affecterclasse.component';

describe('AffecterclasseComponent', () => {
  let component: AffecterclasseComponent;
  let fixture: ComponentFixture<AffecterclasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffecterclasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecterclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
