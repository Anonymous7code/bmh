import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-doctor-dashboard-home',
  templateUrl: './doctor-dashboard-home.component.html',
  styleUrls: ['./doctor-dashboard-home.component.scss'],
})
export class DoctorDashboardHomeComponent implements OnInit {
  TestingDoctorUserData: any;

  constructor(private _ApiService: ApiService) {}

  ngOnInit(): void {
    this._ApiService.GetDocDetails().subscribe((data) => {
      this.TestingDoctorUserData = data;
      console.log(this.TestingDoctorUserData);
    });
  }
}

/* match /Doctors/{DoctorsDocuID} {
       allow create,list: if request.auth.uid != null;
       // allow read,write: if request.auth.uid == resource.data.docuid;         
} */
