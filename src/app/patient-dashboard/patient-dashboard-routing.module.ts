import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentViewDetailsComponent } from './patient-dashboard-home/appointment-view-details/appointment-view-details.component';
import { PatientDashboardHomeComponent } from './patient-dashboard-home/patient-dashboard-home.component';
import { PatientDashboardComponent } from './patient-dashboard.component';
import { PatientInvoiceComponent } from './patient-invoice/patient-invoice.component';
import { PatientMedicinesComponent } from './patient-medicines/patient-medicines.component';
import { PatientProfileSettingsComponent } from './patient-profile-settings/patient-profile-settings.component';
import { YourAppointmentComponent } from './your-appointment/your-appointment.component';

const routes: Routes = [
  {
    path: '',
    component: PatientDashboardComponent,
    children: [
      {
        redirectTo: 'patient-dashboard-home',
        path: '',
        pathMatch: 'full',
      },
      {
        path: 'patient-dashboard-home',
        component: PatientDashboardHomeComponent,
      },
      {
        path: 'appointment-view-details',
        component: AppointmentViewDetailsComponent,
      },

      {
        path: 'your-appointment',
        component: YourAppointmentComponent,
      },
      { path: 'invoice', component: PatientInvoiceComponent },
      {
        path: 'patient-profile-setting',
        component: PatientProfileSettingsComponent,
      },
      {
        path: 'patient-medicine',
        component: PatientMedicinesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientDashboardRoutingModule {}
