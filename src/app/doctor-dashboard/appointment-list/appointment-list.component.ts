import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent implements OnInit {
  AppointmentsData: any;

  constructor(private _ApiService: ApiService) {
    this._ApiService.GetBookedAppointments().subscribe((data) => {
      this.AppointmentsData = data;
      console.log(this.AppointmentsData);
    });
  }
  ConfirmStatus(data) {
    Swal.fire({
      text: 'Are you sure confirm the status?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this._ApiService.UpdateAppointmentsStatus(data);
        Swal.fire('Confirmed!', 'Patient Appointment Confirmed', 'success');
      }
    });

    // console.log(data);
  }
  CancelStatus(data) {
    Swal.fire({
      text: 'Are you sure cancel the status?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cancel it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this._ApiService.UpdateAppointmentsStatus(data);
        Swal.fire('Canceled!', 'Patient Appointment Canceled', 'success');
      }
    });
  }

  ngOnInit(): void {}
}
