import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-lab-admin-list',
  templateUrl: './lab-admin-list.component.html',
  styleUrls: ['./lab-admin-list.component.scss'],
})
export class LabAdminListComponent implements OnInit {
  LabDetails: any = [{}];

  constructor(private _ApiService: ApiService) {}

  ngOnInit() {
    this.FetchLabDetails();
  }

  FetchLabDetails() {
    this._ApiService.GetLabDetails().subscribe((data) => {
      this.LabDetails = data;
      console.log(this.LabDetails);
    });
  }
}
