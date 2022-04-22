import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-doctor-admin-list',
  templateUrl: './doctor-admin-list.component.html',
  styleUrls: ['./doctor-admin-list.component.scss'],
})
export class DoctorAdminListComponent implements OnInit {
  constructor(public _ApiService: ApiService) {}
  DocsDetails: any = [{}];

  ngOnInit() {
    this.FetchDocDetails();
  }

  FetchDocDetails() {
    this._ApiService.GetDocDetails().subscribe((data) => {
      this.DocsDetails = data;
      console.log(this.DocsDetails);
    });
  }
}
