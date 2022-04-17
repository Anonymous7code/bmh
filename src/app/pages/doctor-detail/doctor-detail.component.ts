import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SharedataService } from '../../services/sharedata.service';
import { HtmlParser, XmlParser } from '@angular/compiler';
import { LoginComponent } from 'src/app/authentication/login/login.component';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss'],
})
export class DoctorDetailComponent implements OnInit {
  constructor(
    private api: ApiService,
    private router: Router,
    private share: SharedataService
  ) {}

  doctor_detail: any = {};
  doctorService: any = [];
  ngOnInit(): void {
    this.doctor_detail=this.api.getDocId()
    this.doctor_detail=this.api.getDoctordata()

    // this.doctor_detail = this.share.get_doc_wise_detail();
    console.log('this.doctor_detail', this.doctor_detail.id);
  
    console.log('this.doctor_detail.id', this.doctor_detail.id);
    this.api.DoctorServiceApi().subscribe(res=>{
      console.log("res",res);
      this.doctorService= res.data
    })
    // if (this.doctor_detail){
    //   console.log('this.doctor_detail.id', this.doctor_detail.id);
    //   this.api.DoctorServiceApi(this.doctor_detail.id).subscribe(res=>{
    //     console.log("res",res);
        
    //   })
    // }
  
  
  }
  get_doctor_wise_detail() {
    let obj = {
      doc_id: this.doctor_detail.doc_id,
    };
    // this.api.postapi('doc_wise_details', obj).subscribe((res: any) => {
    //   if (res.status == 1) {
    //     console.log('doctor', res);
    //     this.doctor_detail.membership = res.data.membership;
    //     this.doctor_detail.experties = res.data.experties;
    //     this.doctor_detail.fellowship_award = res.data.fellowship_award;
    //     this.doctor_detail.facebook_link = res.data.facebook_link;
    //     this.doctor_detail.twitter_link = res.data.twitter_link;
    //     this.doctor_detail.instagram_link = res.data.instagram_link;
    //     this.doctor_detail.linkdine_link = res.data.linkdine_link;
    //     this.doctor_detail.youtube_link = res.data.youtube_link;
    //     this.doctor_detail.remark = res.data.remark;
    //     this.doctor_detail.address = res.data.address;
    //     this.doctor_detail.work_experience = res.data.work_experience;
    //     this.doctor_detail.treatment = res.data.treatment;
    //     this.doctor_detail.rating = res.data.rating;
    //     this.doctor_detail.degree_college = res.data.degree_college;
    //     this.doctor_detail.email = res.data.email;
    //     this.doctor_detail.contact_no2 = res.data.contact_no2;
    //     this.doctor_detail.contact_no1 = res.data.contact_no1;
    //     console.log('this.doctor_detail', this.doctor_detail);

    //     let parser = new DOMParser();
    //     var htmlDoc = parser.parseFromString(
    //       this.doctor_detail.basic_detail,
    //       'text/html'
    //     );
    //     let id = 'userdetails';
    //     console.log('aa', id);
    //     document.getElementById(id).innerHTML = htmlDoc.body.innerHTML;

    //     let parser_membership = new DOMParser();
    //     var htmlDoc_membership = parser_membership.parseFromString(
    //       this.doctor_detail.membership,
    //       'text/html'
    //     );

    //     console.log('aa', id);
    //     document.getElementById('consultation').innerHTML =
    //       htmlDoc_membership.body.innerHTML;

    //     let parser_experties = new DOMParser();
    //     var htmlDoc_exper = parser_experties.parseFromString(
    //       this.doctor_detail.experties,
    //       'text/html'
    //     );

    //     console.log('aa', id);
    //     document.getElementById('feedback').innerHTML =
    //       htmlDoc_exper.body.innerHTML;

    //     let parser_fellowship_award = new DOMParser();
    //     var htmlDoc_fello = parser_fellowship_award.parseFromString(
    //       this.doctor_detail.fellowship_award,
    //       'text/html'
    //     );

    //     console.log('aa', id);
    //     document.getElementById('articles').innerHTML =
    //       htmlDoc_fello.body.innerHTML;
    //   } else {
    //     this.router.navigate(['/doctor']);
    //   }
    // });
  }
}
