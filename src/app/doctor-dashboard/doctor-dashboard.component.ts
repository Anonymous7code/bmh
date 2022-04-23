import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss'],
})
export class DoctorDashboardComponent implements OnInit {
  constructor(private _ApiService: ApiService) {}

  ngOnInit(): void {}

  LogOut() {
    this._ApiService.LogOut();
  }
}
