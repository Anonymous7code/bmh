import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDashboardHomeComponent } from './doctor-dashboard-home.component';

describe('DoctorDashboardHomeComponent', () => {
  let component: DoctorDashboardHomeComponent;
  let fixture: ComponentFixture<DoctorDashboardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDashboardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
