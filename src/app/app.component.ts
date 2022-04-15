import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { SharedataService } from './services/sharedata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angulardemo';
  doctor_category_list: any = [];
  hospital_category_list: any = [];
  treatment_category_list: any = [];
  treatetment_list: any = [];
  all_category_list: any = [];
  cate_type = 2;
  constructor(
    private api: ApiService,
    private router: Router,
    private share: SharedataService
  ) {}

  ngOnInit(): void {
    // this.get_doctor_category();
    // this.treatetment_list_only();
  }

  get_doctor_category() {
    this.api.getapi('category').subscribe((res) => {
      if (res.status == 1) {
        this.all_category_list = res.data;
        console.log('doctor_category', res);
        this.doctor_category_list = this.all_category_list.filter(
          (item) => item.cate_type === '2'
        );
        this.hospital_category_list = this.all_category_list.filter(
          (item) => item.cate_type === '3'
        );
        this.treatment_category_list = this.all_category_list.filter(
          (item) => item.cate_type === '4'
        );
        console.log('doctor_category_list', this.doctor_category_list);
        console.log('hospital_category_list', this.hospital_category_list);
        console.log('treatment_category_list', this.treatment_category_list);
      }
    });
  }
  route_doctor(data) {
    // this.api.set_doctor_list(data);
    this.router.navigate(['/doctor']);

    console.log(data);
  }
  route_hospital(data) {
    // this.api.set_hospital_list(data);
    this.router.navigate(['/hospitals']);

    console.log(data);
  }
  treatetment_list_only() {
    this.api.getapi('treatments_name_list').subscribe((res: any) => {
      if (res.status == 1) {
        this.treatetment_list = res.data;
      } else {
        this.treatetment_list_only_again();
      }
    });
  }
  treatetment_list_only_again() {
    this.api.getapi('treatments_name_list').subscribe((res: any) => {
      if (res.status == 1) {
        this.treatetment_list = res.data;
      } else {
        this.treatetment_list_only();
      }
    });
  }
  route_treatment_detail(data) {
    // this.api.set_treatement_detail(data.t_id);
    this.router.navigate(['/treatment-detail']);
  }
}
