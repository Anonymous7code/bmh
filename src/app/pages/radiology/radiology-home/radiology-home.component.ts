import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-radiology-home',
  templateUrl: './radiology-home.component.html',
  styleUrls: ['./radiology-home.component.scss']
})
export class RadiologyHomeComponent implements OnInit {
  radiology: any;
  LabDetails: any;
  constructor(private _ApiService: ApiService) { 
    this.LabsData();
  }

  
  LabsData() {
    this._ApiService.GetLabs().subscribe((res) => {
      this.LabDetails = res;
      console.log(this.LabDetails);
this.radiology= this.LabDetails.filter(res=>res.lab_type=='radiology')
console.log("this.radiology",this.radiology);
    });
  }

  ngOnInit(): void {
  }

}
