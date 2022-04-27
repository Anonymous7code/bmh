import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-lab-dashboard',
  templateUrl: './lab-dashboard.component.html',
  styleUrls: ['./lab-dashboard.component.scss'],
})
export class LabDashboardComponent implements OnInit {
  constructor(private _ApiService: ApiService) {}

  ngOnInit(): void {}

  LogOut() {
    this._ApiService.LogOut();
  }
}
