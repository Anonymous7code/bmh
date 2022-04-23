import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { LoginPatientComponent } from './login-patient/login-patient.component';
import { LoginLabComponent } from './login-lab/login-lab.component';

@NgModule({
  declarations: [
    LoginDoctorComponent,
    LoginPatientComponent,
    LoginLabComponent,
  ],
  imports: [CommonModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {
  constructor() {
    console.log('AUTH MODULE LOADED');
  }
}
