import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorDashboardRoutingModule } from './doctor-dashboard-routing.module';
import { DoctorDashboardHomeComponent } from './doctor-dashboard-home/doctor-dashboard-home.component';
import { DoctorDashboardComponent } from './doctor-dashboard.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

@NgModule({
  declarations: [
    DoctorDashboardComponent,
    DoctorDashboardHomeComponent,
    AppointmentListComponent,
  ],
  imports: [CommonModule, DoctorDashboardRoutingModule],
})
export class DoctorDashboardModule {
  constructor() {}
}
