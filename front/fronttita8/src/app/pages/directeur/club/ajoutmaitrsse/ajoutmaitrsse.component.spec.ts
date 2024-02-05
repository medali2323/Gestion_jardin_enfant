import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutmaitrsseComponent } from './ajoutmaitrsse.component';

describe('AjoutmaitrsseComponent', () => {
  let component: AjoutmaitrsseComponent;
  let fixture: ComponentFixture<AjoutmaitrsseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutmaitrsseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutmaitrsseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
