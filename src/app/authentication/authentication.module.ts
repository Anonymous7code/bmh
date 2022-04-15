import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [PatientRegistrationComponent, LoginComponent],
  imports: [CommonModule,
    ReactiveFormsModule
  ],
})
export class AuthenticationModule {}
