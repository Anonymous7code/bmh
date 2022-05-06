import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabDashboardRoutingModule } from './lab-dashboard-routing.module';
import { LabDashboardComponent } from './lab-dashboard.component';
import { LabDashboardHomeComponent } from './lab-dashboard-home/lab-dashboard-home.component';
import { LabSettingsComponent } from './lab-settings/lab-settings.component';
import { LabAppointmentDetailsComponent } from './appoinments/lab-appointment-details/lab-appointment-details.component';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageTestComponent } from './manage-test/manage-test.component';

@NgModule({
  declarations: [
    LabDashboardComponent,
    LabDashboardHomeComponent,
    LabSettingsComponent,
    LabAppointmentDetailsComponent,
    AppoinmentsComponent,
    ManageTestComponent,
  ],
  imports: [
    CommonModule,
    LabDashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LabDashboardModule {
  constructor() {}
}
