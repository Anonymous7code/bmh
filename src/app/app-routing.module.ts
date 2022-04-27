import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DoctorDetailComponent } from './pages/doctor-detail/doctor-detail.component';
import { HospitalsComponent } from './pages/hospitals/hospitals.component';
import { HospitalDetailComponent } from './pages/hospital-detail/hospital-detail.component';
import { TreatmentComponent } from './pages/treatment/treatment.component';
import { TreatmentDetailComponent } from './pages/treatment-detail/treatment-detail.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PatientRegistrationComponent } from './pages/patient-registration/patient-registration.component';
import { DoctorRegistrationComponent } from './pages/doctor-registration/doctor-registration.component';
import { PathologyComponent } from './pages/pathology/pathology.component';
import { ViewPathologyComponent } from './pages/pathology/view-pathology/view-pathology.component';
import { PathologyHomeComponent } from './pages/pathology/pathology-home/pathology-home.component';
import { RadiologyHomeComponent } from './pages/radiology/radiology-home/radiology-home.component';
import { ViewRadiologyComponent } from './pages/radiology/radiology-home/view-radiology/view-radiology.component';
import { ProductMedicinesComponent } from './pages/product-medicines/product-medicines.component';
import { LabRegistrationComponent } from './pages/lab-registration/lab-registration.component';
import { CanActivateGuard } from './services/can-activate.guard';

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
    canActivate: [CanActivateGuard],
    loadChildren: () =>
      import('./doctor-dashboard/doctor-dashboard.module').then(
        (m) => m.DoctorDashboardModule
      ),
  },
  {
    path: 'patient-dashboard',
    canActivate: [CanActivateGuard],
    loadChildren: () =>
      import('./patient-dashboard/patient-dashboard.module').then(
        (m) => m.PatientDashboardModule
      ),
  },

  {
    path: 'admin-dashboard',
    canActivate: [CanActivateGuard],
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      ),
  },
  {
    path: 'lab-dashboard',
    canActivate: [CanActivateGuard],
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
