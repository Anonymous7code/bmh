import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-registration',
  templateUrl: './lab-registration.component.html',
  styleUrls: ['./lab-registration.component.scss'],
})
export class LabRegistrationComponent implements OnInit {
  LabForm: FormGroup;
  constructor(
    private _ApiService: ApiService,
    private Route: Router,
    private _FormBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.LabForm = this._FormBuilder.group({
      lab_name: '',
      lab_type: 'Lab',
      mobile_number: '',
      email: '',
      lab_password: '',
      lab_cpassword: '',
      country: '',
      city: '',
      state: '',
      address: '',
    });
  }

  RegisterLab() {
    this._ApiService.RegistrationForLab(
      this.LabForm.value.email,
      this.LabForm.value.lab_password
    );
    this._ApiService.LabRegistration(this.LabForm.value);
    console.log(this.LabForm.value);
    this.Route.navigate(['']);
  }
}
