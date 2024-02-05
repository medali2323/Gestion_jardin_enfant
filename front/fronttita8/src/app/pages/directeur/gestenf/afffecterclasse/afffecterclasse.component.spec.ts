import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfffecterclasseComponent } from './afffecterclasse.component';

describe('AfffecterclasseComponent', () => {
  let component: AfffecterclasseComponent;
  let fixture: ComponentFixture<AfffecterclasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfffecterclasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfffecterclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
