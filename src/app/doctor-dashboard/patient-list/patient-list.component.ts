import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  patientlist:any={}
  constructor(private api:ApiService) { }

  ngOnInit(): void {
   
    this.patientlist=this.api.getpatientlist()
    console.log("this.patientlist",this.patientlist);
    
    let patient =sessionStorage.getItem('patientDetail');
console.log("patient",patient);
// this.api.parientlistApi().subscribe(res=>{
//   if(res){
//     console.log("res",res);
//     this.patientlist= res
//     this.api.setpatientlist(res)
//   }
// })
  }

}
