import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.scss'],
})
export class LoginDoctorComponent implements OnInit {
  LoginTitle = 'Doctors';
  constructor() {
    console.log('DOCTOR LOGIN MODULE LOADED');
  }

  ngOnInit(): void {}
}
