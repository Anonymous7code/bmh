import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.scss'],
})
export class DoctorRegistrationComponent implements OnInit {
  patientForm: any;
  constructor() {}

  ngOnInit(): void {}
}
