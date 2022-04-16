import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';
@NgModule({
  declarations: [PatientRegistrationComponent, LoginComponent, DoctorRegistrationComponent],
  imports: [CommonModule,
    ReactiveFormsModule
  ],
})
export class AuthenticationModule {}
