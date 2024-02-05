import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjtnivauComponent } from './ajtnivau.component';

describe('AjtnivauComponent', () => {
  let component: AjtnivauComponent;
  let fixture: ComponentFixture<AjtnivauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjtnivauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjtnivauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
