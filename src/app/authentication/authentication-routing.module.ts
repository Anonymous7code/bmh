import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { LoginPatientComponent } from './login-patient/login-patient.component';
import { LoginLabComponent } from './login-lab/login-lab.component';

const routes: Routes = [
  { path: 'login-doctor', component: LoginDoctorComponent },
  { path: 'login-patient', component: LoginPatientComponent },
  { path: 'login-lab', component: LoginLabComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
