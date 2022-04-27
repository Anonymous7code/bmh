import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from '../services/can-activate.guard';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { ClinicSettingComponent } from './clinic-setting/clinic-setting.component';
import { DoctorDashboardHomeComponent } from './doctor-dashboard-home/doctor-dashboard-home.component';
import { DoctorDashboardComponent } from './doctor-dashboard.component';
import { HospitalSettingComponent } from './hospital-setting/hospital-setting.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PayoutSettingComponent } from './payout-setting/payout-setting.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [CanActivateGuard],
    component: DoctorDashboardComponent,
    children: [
      {
        redirectTo: 'doctor-dashboard-home',
        path: '',
        pathMatch: 'full',
      },
      {
        path: 'doctor-dashboard-home',
        component: DoctorDashboardHomeComponent,
      },
      {
        path: 'service',
        component: ServiceComponent,
      },
      { path: 'patient-list', component: PatientListComponent },
      { path: 'appointment-list', component: AppointmentListComponent },
      { path: 'clinic-setting', component: ClinicSettingComponent },
      { path: 'hospital-setting', component: HospitalSettingComponent },
      { path: 'invoice', component: InvoiceComponent },
      { path: 'payout-setting', component: PayoutSettingComponent },
      { path: 'profile-setting', component: ProfileSettingComponent },
      { path: 'service', component: ServiceComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorDashboardRoutingModule {}
