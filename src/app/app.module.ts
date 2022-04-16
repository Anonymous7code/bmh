import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DemopageComponent } from './pages/demopage/demopage.component';
// import { NewdemoComponent } from './pages/newdemo/newdemo.component';
import { HomeComponent } from './pages/home/home.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DoctorDetailComponent } from './pages/doctor-detail/doctor-detail.component';
import { HospitalsComponent } from './pages/hospitals/hospitals.component';
import { HospitalDetailComponent } from './pages/hospital-detail/hospital-detail.component';
// import { TreatmentComponent } from './pages/treatment/treatment.component';
// import { TreatmentDetailComponent } from './pages/treatment-detail/treatment-detail.component';
// import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
// import { AboutUsComponent } from './pages/about-us/about-us.component';
// import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
//import {NgxPaginationModule} from 'ngx-pagination';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AppointmentListComponent } from './doctor-dashboard/appointment-list/appointment-list.component';
import { ClinicSettingComponent } from './doctor-dashboard/clinic-setting/clinic-setting.component';
import { HospitalSettingComponent } from './doctor-dashboard/hospital-setting/hospital-setting.component';
// import { InvoiceComponent } from './doctor-dashboard/invoice/invoice.component';
import { PayoutSettingComponent } from './doctor-dashboard/payout-setting/payout-setting.component';
import { ProfileSettingComponent } from './doctor-dashboard/profile-setting/profile-setting.component';
import { ServiceComponent } from './doctor-dashboard/service/service.component';
import { DoctorDashboardHomeComponent } from './doctor-dashboard/doctor-dashboard-home/doctor-dashboard-home.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientDashboardHomeComponent } from './patient-dashboard/patient-dashboard-home/patient-dashboard-home.component';
import { YourAppointmentComponent } from './patient-dashboard/your-appointment/your-appointment.component';
import { PatientInvoiceComponent } from './patient-dashboard/patient-invoice/patient-invoice.component';
import { PatientMedicinesComponent } from './patient-dashboard/patient-medicines/patient-medicines.component';
import { PatientProfileSettingsComponent } from './patient-dashboard/patient-profile-settings/patient-profile-settings.component';
import { RouterModule } from '@angular/router';
import { AppointmentViewDetailsComponent } from './patient-dashboard/patient-dashboard-home/appointment-view-details/appointment-view-details.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MedicinesComponent } from './admin-dashboard/medicines/medicines.component';
import { UserPurchasingDetailsComponent } from './admin-dashboard/user-purchasing-details/user-purchasing-details.component';
import { TransactionComponent } from './admin-dashboard/transaction/transaction.component';
import { AdminDashboardHomeComponent } from './admin-dashboard/admin-dashboard-home/admin-dashboard-home.component';
import { AdminTransactionDetailsComponent } from './admin-dashboard/admin-dashboard-home/admin-transaction-details/admin-transaction-details.component';
import { LabDashboardComponent } from './lab-dashboard/lab-dashboard.component';
import { LabDetailsComponent } from './lab-dashboard/lab-details/lab-details.component';
import { AppoinmentsComponent } from './lab-dashboard/appoinments/appoinments.component';
import { LabInvoiceComponent } from './lab-dashboard/lab-invoice/lab-invoice.component';
import { LabDashboardHomeComponent } from './lab-dashboard/lab-dashboard-home/lab-dashboard-home.component';
import { LabViewDetailsComponent } from './lab-dashboard/lab-dashboard-home/lab-view-details/lab-view-details.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PatientListComponent } from './doctor-dashboard/patient-list/patient-list.component';
@NgModule({
  declarations: [
    AppComponent,
    // DemopageComponent,
    // NewdemoComponent,
    HomeComponent,
    DoctorComponent,
    DoctorDetailComponent,
    HospitalsComponent,
    HospitalDetailComponent,
    // TreatmentComponent,
    // TreatmentDetailComponent,
    // TestimonialsComponent,
    // AboutUsComponent,
    // ContactUsComponent,
    DoctorDashboardComponent,
    AppointmentListComponent,
    ClinicSettingComponent,
    HospitalSettingComponent,
    // InvoiceComponent,
    PayoutSettingComponent,
    ProfileSettingComponent,
    ServiceComponent,
    DoctorDashboardHomeComponent,
    PatientDashboardComponent,
    PatientDashboardHomeComponent,
    YourAppointmentComponent,
    PatientInvoiceComponent,
    PatientMedicinesComponent,
    PatientProfileSettingsComponent,
    AppointmentViewDetailsComponent,
    AdminDashboardComponent,
    MedicinesComponent,
    UserPurchasingDetailsComponent,
    TransactionComponent,
    AdminDashboardHomeComponent,
    AdminTransactionDetailsComponent,
    LabDashboardComponent,
    LabDetailsComponent,
    AppoinmentsComponent,
    LabInvoiceComponent,
    LabDashboardHomeComponent,
    LabViewDetailsComponent,
    HeaderComponent,
    FooterComponent,
    PatientListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule,
    RouterModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
