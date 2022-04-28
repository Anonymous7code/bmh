import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SharedataService } from '../../services/sharedata.service';
import { HtmlParser, XmlParser } from '@angular/compiler';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  @ViewChild('search') search!: ElementRef;
  doctorList: any;
  patientlist: any;
  constructor(
    private api: ApiService,
    private router: Router,
    private share: SharedataService
  ) {}

  ngOnInit(): void {
    this.get_doctor_data();
    this.doctorList = JSON.parse(localStorage.getItem('doctorlist'));
  }
  // routerLink="/doctor-detail"
  searchDoctors() {
    let obj = {
      search_type: this.search.nativeElement.value,
      keyword: 'D*',
      pg_num: 1,
      pg_size: 100,
    };
    this.api.DoctorSearch(obj).subscribe((res) => {
      if (res) {
        this.doctorList = res;
        console.log('doctorlist', this.doctorList);
        localStorage.setItem('doctorlist', JSON.stringify(this.doctorList));
      }
    });
  }

  doctorDetail(id) {
    this.api.setDocId(id);
    this.router.navigate(['/doctor-detail']);
  }

  openModel() {
    console.log(this.patientlist);
    if (this.patientlist) {
      this.api.openmodal('exampleModal');
    } else {
      this.router.navigate(['/patient-registration']);
    }
  }

  doctor_list: any = [];
  htmlDoc: any;
  get_doctor_data() {
    this.doctor_list = [];
    this.api.doctor_list.subscribe((res: any) => {
      console.log('ravi', res);
      this.doctor_list = res.data;

      console.log('this.doctor_list', this.doctor_list);

      // for (let index = 0; index < this.doctor_list.length; index++) {
      //             let parser = new DOMParser();
      //           this.htmlDoc = parser.parseFromString(this.doctor_list[index].basic_detail, 'text/html');
      // console.log("aa",this.htmlDoc);

      // }

      //    let parser = new DOMParser();
      //      this.htmlDoc = parser.parseFromString(this.doctor_list[0].basic_detail, 'text/html');
      // console.log("aa",this.htmlDoc);
      // if(this.doctor_list.length>0){
      // console.log("f");

      // }
    });
  }
  detail: any;
  parsing_new(data, n) {
    console.log('doc_id', data);

    let parser = new DOMParser();
    this.detail = data.basic_detail.slice(8, 28);
    console.log('detail', this.detail);

    var htmlDoc = parser.parseFromString(data.basic_detail, 'text/html');
    let id = 'basic' + data.doc_id;
    console.log('aa', id);
    document.getElementById(id).innerHTML = htmlDoc.body.innerHTML;
  }
  read_more(doc) {
    console.log('doc', doc);
    this.share.set_doc_wise_detail(doc);
    this.router.navigate(['/doctor-detail']);
  }
  parsing(data) {
    let parser = new DOMParser();
    this.htmlDoc = parser.parseFromString(data.basic_detail, 'text/html');
    console.log('aa', this.htmlDoc);
  }
  some_text: any =
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
}
