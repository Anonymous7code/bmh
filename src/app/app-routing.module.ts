import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './authentication/login/login.component';
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
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDashboardHomeComponent } from './admin-dashboard/admin-dashboard-home/admin-dashboard-home.component';
import { MedicinesComponent } from './admin-dashboard/medicines/medicines.component';
import { TransactionComponent } from './admin-dashboard/transaction/transaction.component';
import { UserPurchasingDetailsComponent } from './admin-dashboard/user-purchasing-details/user-purchasing-details.component';
import { AdminTransactionDetailsComponent } from './admin-dashboard/admin-dashboard-home/admin-transaction-details/admin-transaction-details.component';
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

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'demopage', component: DemopageComponent },
  // { path: 'newdemo', component: NewdemoComponent },
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
  {
    path: 'patient-dashboard',
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
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      {
        redirectTo: 'admin-dashboard-home',
        path: '',
        pathMatch: 'full',
      },
      {
        path: 'admin-dashboard-home',
        component: AdminDashboardHomeComponent,
      },
      {
        path: 'admin-transaction-details',
        component: AdminTransactionDetailsComponent,
      },
      {
        path: 'medicines',
        component: MedicinesComponent,
      },
      { path: 'transaction', component: TransactionComponent },
      {
        path: 'user-purchasing-details',
        component: UserPurchasingDetailsComponent,
      },
    ],
  },
  {
    path: 'lab-dashboard',
    component: LabDashboardComponent,
    children: [
      {
        redirectTo: 'lab-dashboard-home',
        path: '',
        pathMatch: 'full',
      },
      {
        path: 'lab-dashboard-home',
        component: LabDashboardHomeComponent,
      },
      {
        path: 'lab-view-details',
        component: LabViewDetailsComponent,
      },

      { path: 'lab-invoice', component: LabInvoiceComponent },
      {
        path: 'appointments',
        component: AppoinmentsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
