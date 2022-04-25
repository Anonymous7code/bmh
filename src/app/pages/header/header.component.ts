import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  DoctorLoginForm = new FormGroup({});
  PatientLoginForm = new FormGroup({});
  LabLoginForm = new FormGroup({});

  constructor(
    private _ApiService: ApiService,
    private _FormBuilder: FormBuilder
  ) {
    this.DoctorLoginForm = this._FormBuilder.group({
      doc_email: [''],
      doc_password: [''],
    });

    this.PatientLoginForm = this._FormBuilder.group({
      patient_email: [''],
      patient_password: [''],
    });
    this.LabLoginForm = this._FormBuilder.group({
      lab_email: [''],
      lab_password: [''],
    });
  }

  LogInDoc() {
    if (this.DoctorLoginForm.value.doc_email == '') {
      alert('Please enter email');
    } else {
      this._ApiService.LogInForDoc(
        this.DoctorLoginForm.value.doc_email,
        this.DoctorLoginForm.value.doc_password
      );
    }
  }

  LogInPatient() {
    if (this.PatientLoginForm.value.patient_email == '') {
      alert('Please enter email');
    } else {
      this._ApiService.LogInForPatient(
        this.PatientLoginForm.value.patient_email,
        this.PatientLoginForm.value.patient_password
      );
    }
    // console.log(this.PatientLoginForm.value);
  }

  LogInLab() {
    if (this.LabLoginForm.value.lab_email == '') {
      alert('Please enter email');
    } else {
      this._ApiService.LogInForLab(
        this.LabLoginForm.value.lab_email,
        this.LabLoginForm.value.lab_password
      );
    }
    // console.log(this.LabLoginForm.value);
  }

  ngOnInit(): void {}
}
