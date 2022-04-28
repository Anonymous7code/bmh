import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pathology-home',
  templateUrl: './pathology-home.component.html',
  styleUrls: ['./pathology-home.component.scss'],
})
export class PathologyHomeComponent implements OnInit {
  LabDetails: any;
  pathologyData: any;
  constructor(private _ApiService: ApiService) {
    this.LabsData();
  }

  LabsData() {
    this._ApiService.GetLabs().subscribe((res) => {
      this.LabDetails = res;
      console.log(this.LabDetails);
      this.pathologyData = this.LabDetails.filter(
        (res) => res.lab_type == 'pathology'
      );
      console.log('this.pathologyData', this.pathologyData);
    });
  }
  ngOnInit(): void {}
}
