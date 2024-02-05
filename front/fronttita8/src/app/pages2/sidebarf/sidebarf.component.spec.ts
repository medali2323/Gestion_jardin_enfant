import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarfComponent } from './sidebarf.component';

describe('SidebarfComponent', () => {
  let component: SidebarfComponent;
  let fixture: ComponentFixture<SidebarfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
