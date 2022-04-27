import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DoctorDetailComponent } from './pages/doctor-detail/doctor-detail.component';
import { HospitalsComponent } from './pages/hospitals/hospitals.component';
import { HospitalDetailComponent } from './pages/hospital-detail/hospital-detail.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
//import {NgxPaginationModule} from 'ngx-pagination';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PatientListComponent } from './doctor-dashboard/patient-list/patient-list.component';
import { PathologyComponent } from './pages/pathology/pathology.component';
import { ViewPathologyComponent } from './pages/pathology/view-pathology/view-pathology.component';
import { PathologyHomeComponent } from './pages/pathology/pathology-home/pathology-home.component';
import { RadiologyComponent } from './pages/radiology/radiology.component';
import { RadiologyHomeComponent } from './pages/radiology/radiology-home/radiology-home.component';
import { ViewRadiologyComponent } from './pages/radiology/radiology-home/view-radiology/view-radiology.component';
import { ProductMedicinesComponent } from './pages/product-medicines/product-medicines.component';
import { DoctorRegistrationComponent } from './pages/doctor-registration/doctor-registration.component';
import { PatientRegistrationComponent } from './pages/patient-registration/patient-registration.component';
import { environment } from 'src/environments/environment';
import { LabRegistrationComponent } from './pages/lab-registration/lab-registration.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorComponent,
    DoctorDetailComponent,
    HospitalsComponent,
    HospitalDetailComponent,
    HeaderComponent,
    FooterComponent,
    PatientListComponent,
    PathologyComponent,
    ViewPathologyComponent,
    ContactUsComponent,
    PathologyHomeComponent,
    RadiologyComponent,
    RadiologyHomeComponent,
    ViewRadiologyComponent,
    ProductMedicinesComponent,
    DoctorRegistrationComponent,
    PatientRegistrationComponent,
    LabRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
