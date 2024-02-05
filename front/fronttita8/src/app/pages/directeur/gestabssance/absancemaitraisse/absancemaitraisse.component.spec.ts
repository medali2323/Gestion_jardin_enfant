import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsancemaitraisseComponent } from './absancemaitraisse.component';

describe('AbsancemaitraisseComponent', () => {
  let component: AbsancemaitraisseComponent;
  let fixture: ComponentFixture<AbsancemaitraisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsancemaitraisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsancemaitraisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
