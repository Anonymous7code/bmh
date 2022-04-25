import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DemopageComponent } from './pages/demopage/demopage.component';
// import { NewdemoComponent } from './pages/newdemo/newdemo.component';
import { HomeComponent } from './pages/home/home.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DoctorDetailComponent } from './pages/doctor-detail/doctor-detail.component';
import { HospitalsComponent } from './pages/hospitals/hospitals.component';
import { HospitalDetailComponent } from './pages/hospital-detail/hospital-detail.component';
import { TreatmentComponent } from './pages/treatment/treatment.component';
import { TreatmentDetailComponent } from './pages/treatment-detail/treatment-detail.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PatientRegistrationComponent } from './pages/patient-registration/patient-registration.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AppointmentListComponent } from './doctor-dashboard/appointment-list/appointment-list.component';
import { ClinicSettingComponent } from './doctor-dashboard/clinic-setting/clinic-setting.component';
import { HospitalSettingComponent } from './doctor-dashboard/hospital-setting/hospital-setting.component';
import { InvoiceComponent } from './doctor-dashboard/invoice/invoice.component';
import { PayoutSettingComponent } from './doctor-dashboard/payout-setting/payout-setting.component';
import { ProfileSettingComponent } from './doctor-dashboard/profile-setting/profile-setting.component';
import { ServiceComponent } from './doctor-dashboard/service/service.component';
import { DoctorDashboardHomeComponent } from './doctor-dashboard/doctor-dashboard-home/doctor-dashboard-home.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientDashboardHomeComponent } from './patient-dashboard/patient-dashboard-home/patient-dashboard-home.component';
import { YourAppointmentComponent } from './patient-dashboard/your-appointment/your-appointment.component';
import { PatientInvoiceComponent } from './patient-dashboard/patient-invoice/patient-invoice.component';
import { PatientProfileSettingsComponent } from './patient-dashboard/patient-profile-settings/patient-profile-settings.component';
import { PatientMedicinesComponent } from './patient-dashboard/patient-medicines/patient-medicines.component';
import { AppointmentViewDetailsComponent } from './patient-dashboard/patient-dashboard-home/appointment-view-details/appointment-view-details.component';
import { AppoinmentsComponent } from './lab-dashboard/appoinments/appoinments.component';
import { LabInvoiceComponent } from './lab-dashboard/lab-invoice/lab-invoice.component';
import { LabDashboardHomeComponent } from './lab-dashboard/lab-dashboard-home/lab-dashboard-home.component';
import { LabDashboardComponent } from './lab-dashboard/lab-dashboard.component';
import { LabViewDetailsComponent } from './lab-dashboard/lab-dashboard-home/lab-view-details/lab-view-details.component';
import { PatientListComponent } from './doctor-dashboard/patient-list/patient-list.component';
import { DoctorRegistrationComponent } from './pages/doctor-registration/doctor-registration.component';
import { PathologyComponent } from './pages/pathology/pathology.component';
import { ViewPathologyComponent } from './pages/pathology/view-pathology/view-pathology.component';
import { PathologyHomeComponent } from './pages/pathology/pathology-home/pathology-home.component';
import { RadiologyHomeComponent } from './pages/radiology/radiology-home/radiology-home.component';
import { ViewRadiologyComponent } from './pages/radiology/radiology-home/view-radiology/view-radiology.component';
import { ProductMedicinesComponent } from './pages/product-medicines/product-medicines.component';
import { LabRegistrationComponent } from './pages/lab-registration/lab-registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'doctor-detail', component: DoctorDetailComponent },
  { path: 'hospitals', component: HospitalsComponent },
  { path: 'hospital-detail', component: HospitalDetailComponent },
  { path: 'treatment', component: TreatmentComponent },
  { path: 'treatment-detail', component: TreatmentDetailComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'patient-registration', component: PatientRegistrationComponent },
  { path: 'doctor-registration', component: DoctorRegistrationComponent },
  { path: 'lab-registration', component: LabRegistrationComponent },
  { path: 'product-medicines', component: ProductMedicinesComponent },
  {
    path: 'pathology',
    component: PathologyComponent,
    children: [
      {
        redirectTo: 'pathology-home',
        path: '',
        pathMatch: 'full',
      },
      {
        path: 'pathology-home',
        component: PathologyHomeComponent,
      },
      {
        path: 'view-pathology',
        component: ViewPathologyComponent,
      },
    ],
  },
  {
    path: 'radiology',
    component: PathologyComponent,
    children: [
      {
        redirectTo: 'radiology-home',
        path: '',
        pathMatch: 'full',
      },
      {
        path: 'radiology-home',
        component: RadiologyHomeComponent,
      },
      {
        path: 'view-radiology',
        component: ViewRadiologyComponent,
      },
    ],
  },
  {
    path: 'doctor-dashboard',
    loadChildren: () =>
      import('./doctor-dashboard/doctor-dashboard.module').then(
        (m) => m.DoctorDashboardModule
      ),
  },
  {
    path: 'patient-dashboard',
    loadChildren: () =>
      import('./patient-dashboard/patient-dashboard.module').then(
        (m) => m.PatientDashboardModule
      ),
  },

  {
    path: 'admin-dashboard',
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      ),
  },
  {
    path: 'lab-dashboard',
    loadChildren: () =>
      import('./lab-dashboard/lab-dashboard.module').then(
        (m) => m.LabDashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
