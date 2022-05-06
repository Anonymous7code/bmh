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
  LabAuthUID: any;

  constructor(
    private _ApiService: ApiService,
    private Route: Router,
    private _FormBuilder: FormBuilder
  ) {}

  ngOnInit() {
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
      labuid: '',
    });
  }

  SetLabAuthUID(authuid) {
    this.LabForm.patchValue({
      labuid: authuid,
    });
    this._ApiService.LabRegistration(this.LabForm.value);
    this.Route.navigate(['']);
    console.log(this.LabForm.value);
  }

  RegisterLab() {
    this._ApiService.LabAuthUID.subscribe((AuthUID) => {
      this.LabAuthUID = AuthUID;
      this.SetLabAuthUID(this.LabAuthUID);
      console.log('AUTH UID LAB', this.LabAuthUID);
    });

    this._ApiService.RegistrationForLab(
      this.LabForm.value.email,
      this.LabForm.value.lab_password
    );
  }
}
