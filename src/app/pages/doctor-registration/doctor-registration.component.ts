import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.scss'],
})
export class DoctorRegistrationComponent implements OnInit {
  DoctorForm: FormGroup;

  constructor(
    private _FormBuilder: FormBuilder,
    private _ApiService: ApiService
  ) {}

  ngOnInit() {
    this.DoctorForm = this._FormBuilder.group({
      gender: '',
      user_name: '',
      full_name: '',
      mobile_number: '',
      email: '',
      password: '',
      cpassword: '',
      location: '',
    });
  }

  testsubmit() {
    this._ApiService.DocRegistration(this.DoctorForm.value);
    console.log(this.DoctorForm.value);
  }
}
