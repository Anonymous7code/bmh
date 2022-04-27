import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss'],
})
export class PatientDashboardComponent implements OnInit {
  constructor(private _ApiService: ApiService) {}

  ngOnInit() {}

  logOut() {
    this._ApiService.LogOut();
  }
}
