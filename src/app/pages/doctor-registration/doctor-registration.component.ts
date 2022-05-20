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
  DocAuthUID: any;

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
      docuid: '',
      role: 'Doctor',
    });
  }

  SetDocAuthUID(authuid) {
    this.DoctorForm.patchValue({
      docuid: authuid,
    });
    this._ApiService.DocRegistration(this.DoctorForm.value);
    this.Route.navigate(['']);
    console.log(this.DoctorForm.value);
  }

  RegisterDoc() {
    this._ApiService.DocAuthUID.subscribe((AuthUID) => {
      this.DocAuthUID = AuthUID;
      this.SetDocAuthUID(this.DocAuthUID);
      console.log('AUTH UID DOC', this.DocAuthUID);
    });
    this._ApiService.RegistrationForDoc(
      this.DoctorForm.value.email,
      this.DoctorForm.value.password
    );
  }
}
