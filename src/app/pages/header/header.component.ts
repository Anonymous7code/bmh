import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  LoginForm = new FormGroup({});
  DoctorUID: any;
  PatientUID: any;
  LabUID: any;
  IsLoggedIn = true;
  IsDashboardName = '';
  IsDashboardLink = '';
  TestingDocLoginUid: any;

  /*  PatientLoginForm = new FormGroup({});
  LabLoginForm = new FormGroup({}); */

  constructor(
    private _Route: Router,
    private _ApiService: ApiService,
    private _FormBuilder: FormBuilder
  ) {
    this.LoginForm = this._FormBuilder.group({
      doc_login: [''],
      patient_login: [''],
      lab_login: [''],
      login_email: [''],
      login_password: [''],
    });

    /* this.PatientLoginForm = this._FormBuilder.group({
      patient_email: [''],
      patient_password: [''],
    });
    this.LabLoginForm = this._FormBuilder.group({
      lab_email: [''],
      lab_password: [''],
    }); */

    if (localStorage.getItem('cYpheRConCeAl')) {
      this.IsLoggedIn = false;
    } else {
      this.IsLoggedIn = true;
    }

    // USER LOGGED STATE
    this._ApiService.User.subscribe((data) => {
      if (data != null) {
        this.IsLoggedIn = false;
      } else {
        this.IsLoggedIn = true;
      }
      console.log('logged state', data);
    });
  }

  ngOnInit() {
    localStorage.getItem('Doc_Dashboard');
    localStorage.getItem('Doc_Dashboard_Link');
    localStorage.getItem('Patient_Dashboard');
    localStorage.getItem('Patient_Dashboard_Link');
    localStorage.getItem('Lab_Dashboard');
    localStorage.getItem('Lab_Dashboard_Link');
  }

  LogIn() {
    if (this.LoginForm.value.doc_login == 1) {
      this._ApiService.LogInForDoc(
        this.LoginForm.value.login_email,
        this.LoginForm.value.login_password
      );
      this.IsDashboardName = localStorage.getItem('Doc_Dashboard');
      this.IsDashboardLink = localStorage.getItem('Doc_Dashboard_Link');

      console.log(this.IsDashboardName, this.IsDashboardLink);

      console.log(this.LoginForm.value);
    } else if (this.LoginForm.value.patient_login == 2) {
      this._ApiService.LogInForPatient(
        this.LoginForm.value.login_email,
        this.LoginForm.value.login_password
      );
      this.IsDashboardName = localStorage.getItem('Patient_Dashboard');
      this.IsDashboardLink = localStorage.getItem('Patient_Dashboard_Link');

      console.log(this.LoginForm.value);
    } else if (this.LoginForm.value.lab_login == 3) {
      this._ApiService.LogInForLab(
        this.LoginForm.value.login_email,
        this.LoginForm.value.login_password
      );
      this.IsDashboardName = localStorage.getItem('Lab_Dashboard');
      this.IsDashboardLink = localStorage.getItem('Lab_Dashboard_Link');

      console.log(this.LoginForm.value);
    } else {
      alert('please select login');
    }

    /*  if (this.LoginForm.value.login_email == '') {
      //  EMPTY FIELD ERROR ALERT
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter Login Credentials,Then Submit!',
      });
    } else {
      this._ApiService.LogInForAllIn(
        this.LoginForm.value.login_email,
        this.LoginForm.value.login_password
      );
    } */
  }
  LogOut() {
    this.IsLoggedIn = true;
    this._ApiService.LogOut();
    this.LoginForm.reset();
  }
  /* 
  LogInPatient() {
    if (this.PatientLoginForm.value.patient_email == '') {
      //  EMPTY FIELD ERROR ALERT
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter Login Credentials,Then Submit!',
      });
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
      //  EMPTY FIELD ERROR ALERT
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter Login Credentials,Then Submit!',
      });
    } else {
      this._ApiService.LogInForLab(
        this.LabLoginForm.value.lab_email,
        this.LabLoginForm.value.lab_password
      );
    }
    // console.log(this.LabLoginForm.value);
  }  */
}
