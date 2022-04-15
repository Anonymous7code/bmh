import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { SharedataService } from '../../services/sharedata.service'
import { HtmlParser, XmlParser } from '@angular/compiler';

import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-hospital-detail',
  templateUrl: './hospital-detail.component.html',
  styleUrls: ['./hospital-detail.component.scss']
})
export class HospitalDetailComponent implements OnInit {

  constructor(private api:ApiService,private router: Router,private share:SharedataService) { }
hospital_detail:any={}
  ngOnInit(): void {
this.hospital_detail=this.share.get_hos_wise_detail()
console.log("this.doctor_detai",this.hospital_detail);


if(this.hospital_detail.hos_id>0){
this.get_hospital_wise_detail()
}
  }

get_hospital_wise_detail(){
let obj={
"hos_id":this.hospital_detail.hos_id
}
// this.api.postapi("hos_wise_details",obj).subscribe((res:any)=>{
// if(res.status==1){
// console.log("doctor",res);
// this.hospital_detail.hos_about=res.data.hos_about
// this.hospital_detail.specialities=res.data.specialities
// this.hospital_detail.more_about=res.data.more_about
// this.hospital_detail.reach_us=res.data.reach_us
// this.hospital_detail.contact1=res.data.contact1
// this.hospital_detail.contact2=res.data.contact2
// this.hospital_detail.contact3=res.data.contact3
// this.hospital_detail.email1=res.data.email1
// this.hospital_detail.email2=res.data.email2

// this.hospital_detail.facebook_link=res.data.facebook_link
// this.hospital_detail.twitter_link=res.data.twitter_link
// this.hospital_detail.instagram_link=res.data.instagram_link
// this.hospital_detail.linkdine_link=res.data.linkdine_link
// this.hospital_detail.youtube_link=res.data.youtube_link
// this.hospital_detail.remark=res.data.remark
// this.hospital_detail.facility=res.data.facility

// console.log("this.doctor_detail",this.hospital_detail);

//  let parser = new DOMParser();
// var htmlDoc = parser.parseFromString(this.hospital_detail.hos_about, 'text/html');
// let id="userdetails";

//  document.getElementById(id).innerHTML = htmlDoc.body.innerHTML


//  let parser_specialities = new DOMParser();
// var htmlDoc_specialities = parser_specialities.parseFromString(this.hospital_detail.specialities, 'text/html');


//  document.getElementById("consultation").innerHTML = htmlDoc_specialities.body.innerHTML

//  let parser_more_about = new DOMParser();
// var htmlDoc_more_about= parser_more_about.parseFromString(this.hospital_detail.more_about, 'text/html');

 
//  document.getElementById("feedback").innerHTML = htmlDoc_more_about.body.innerHTML

//  let parser_reach_us = new DOMParser();
// var htmlDoc_reach_us = parser_reach_us.parseFromString(this.hospital_detail.reach_us, 'text/html');
//  document.getElementById("articles").innerHTML = htmlDoc_reach_us.body.innerHTML


// }
// else{

// this.router.navigate(['/hospitals']);
// }
// })
}

}
