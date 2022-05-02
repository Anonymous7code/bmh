import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.scss'],
})
export class DoctorRegistrationComponent implements OnInit {
  DoctorForm: FormGroup;

  constructor(
    private Route: Router,
    private _FormBuilder: FormBuilder,
    private _ApiService: ApiService
  ) {}

  ngOnInit() {
    this.DoctorForm = this._FormBuilder.group({
      gender: 'Gender',
      user_name: '',
      full_name: '',
      mobile_number: '',
      email: '',
      password: '',
      cpassword: '',
      country: '',
      state: '',
      city: '',
    });
  }

  RegisterDoc() {
    this._ApiService.RegistrationForDoc(
      this.DoctorForm.value.email,
      this.DoctorForm.value.password
    );

    this._ApiService.DocRegistration(this.DoctorForm.value);
    console.log(this.DoctorForm.value);
    this.Route.navigate(['']);
  }
}
