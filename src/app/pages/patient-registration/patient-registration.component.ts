import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss'],
})
export class PatientRegistrationComponent implements OnInit {
  patientForm = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private _ApiService: ApiService,
    private route: Router
  ) {}

  ngOnInit() {
    this.patientForm = this.fb.group({
      gender: ['Gender', [Validators.required]],
      user_name: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      cpassword: ['', [Validators.required]],
      // interface-id: ['',2835]
    });
  }

  patientRegistration() {
    console.log(this.patientForm.value);
    this._ApiService.RegistrationForPatient(
      this.patientForm.value.email,
      this.patientForm.value.password
    );

    this._ApiService.PatientRegistration(this.patientForm.value);
    console.log(this.patientForm.value);
    //  this.route.navigate(['/patient-dashboard']);

    console.log('patientForm', this.patientForm.value);
    let obj = {
      user_name: this.patientForm.value.user_name,
      email: this.patientForm.value.email,
      name: this.patientForm.value.first_name,
      last_name: this.patientForm.value.last_name,
      mobile: this.patientForm.value.mobile,
      password: this.patientForm.value.password,
      'interface-id': 2835,
    };
    this._ApiService.patientRegistration(obj).subscribe((res) => {
      if (res) {
        console.log('res', res);
        this._ApiService.setpatientlist(res);
        localStorage.setItem('patientlist', JSON.stringify(res));
        this._ApiService.setpatientDetail(obj.mobile);
        this.route.navigate(['']);
      }
    });
  }
}
