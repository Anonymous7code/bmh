import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-your-appointment',
  templateUrl: './your-appointment.component.html',
  styleUrls: ['./your-appointment.component.scss'],
})
export class YourAppointmentComponent implements OnInit {
  AppointmentsData: any;

  constructor(private _ApiService: ApiService) {}

  ngOnInit() {
    this._ApiService.GetBookedAppointments().subscribe((data) => {
      this.AppointmentsData = data;
      console.log(this.AppointmentsData);
    });
  }
}
