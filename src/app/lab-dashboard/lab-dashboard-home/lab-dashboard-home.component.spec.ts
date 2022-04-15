import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDashboardHomeComponent } from './lab-dashboard-home.component';

describe('LabDashboardHomeComponent', () => {
  let component: LabDashboardHomeComponent;
  let fixture: ComponentFixture<LabDashboardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabDashboardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
