import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjtclasseComponent } from './ajtclasse.component';

describe('AjtclasseComponent', () => {
  let component: AjtclasseComponent;
  let fixture: ComponentFixture<AjtclasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjtclasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjtclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
