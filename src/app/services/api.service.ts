import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  rootUrl;
  baseUrl;
  doctor_array: any = [];
  hospital_array: any = [];
  treatment_detail_obj: any = {};
  doctor_list = new BehaviorSubject(this.doctor_array);
  hospital_list = new BehaviorSubject(this.hospital_array);
  treatment_detail = new BehaviorSubject(this.treatment_detail_obj);
  constructor(private http: HttpClient) {
    this.rootUrl =
      'https://auth.whitecoats.com/auth/realms/whitecoats/protocol/openid-connect/token';
    // this.baseUrl =
    //   'https://appointments-sandbox.whitecoats.com/';
    // this.baseUrl =
    //   'https://appointments-sandbox.whitecoats.com/';
    this.baseUrl = 'http://13.234.100.92:9999/';
  }

  changeapi(x) {
    this.rootUrl = x;
  }

  loginData: any;
  doctorlist: any;
  setLogindata(x) {
    sessionStorage.setItem('loginData', x);
    this.loginData = x;
  }

  getLogindata() {
    let loginData = sessionStorage.getItem('loginData');
    return loginData;
  }

  setDoctordata(x) {
    sessionStorage.setItem('doctorlist', x);
    this.doctorlist = x;
  }

  getDoctordata() {
    let doctorlist = sessionStorage.getItem('doctorlist');
    return doctorlist;
  }

  headersDef() {
    let header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + this.getLogindata(),
      // "x-interface-id": '2835'
    });
    // To be edited
    const requestOptions = { headers: header };
    return requestOptions;
  }
  headers() {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.getLogindata(),
      'x-interface-id': '2835',
    });
    // To be edited
    const requestOptions = { headers: header };
    return requestOptions;
  }

  postHeader(object): any {
    return this.http.post(this.rootUrl, object, this.headersDef());
  }

  patientRegistration(object): any {
    return this.http.post(
      this.baseUrl + 'v1/register/patient',
      object,
      this.headers()
    );
  }

  // getHeader(x): any {
  //   return this.http.get(this.rootUrl + x, this.headersDef())
  // }
  DoctorServiceApi(): any {
    return this.http.get(
      this.baseUrl + `v1/doctor/services/list?doctorId=${this.docId.id}`,
      this.headers()
    );
  }

  parientlistApi(): any {
    return this.http.get(
      this.baseUrl + `v1/patients/list?phone=${this.docId.id}`,
      this.headers()
    );
  }

  DoctorSearch(object?: any): any {
    return this.http.post(this.baseUrl + 'v1/search', object, this.headers());
  }

  // DoctorServiceApi(object?:any): any {
  //   return this.http.get(this.baseUrl+'v1/doctor/services/list', object)
  // }

  docId: any;
  setDocId(x) {
    this.docId = x;
  }

  getDocId() {
    return this.docId;
  }

  // ObtendoToken(): Observable<string> {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded')

  //   const body = new URLSearchParams();
  //   body.set('grant_type', 'password');
  //   body.set('client_id', '05e7bbe7-19ce-4175-b2cc-4b407bc825f9');
  //   body.set('client_secret', '975a20ef-c0c8-424e-abff-5fe9c167e955');
  //   body.set('username', 'zapieruser');
  //   body.set('password', 'WhiteCoats@2022');

  //   // return this.http.post('${ApiDeSegurança}', body, new RequestOptions({headers: headers})).map(response => response.json());
  //   return this.http.post('https://auth.whitecoats.com/auth/realms/whitecoats/protocol/openid-connect/token', body).pipe(map((res) => res));
  // }

  // set_doctor_list(data) {
  //   let obj = {
  //     cat_id: data.cat_id,
  //     cat_name: data.cat_name,
  //   };
  //   this.postapi('doctor_list_category_wise_basic_detail', obj).subscribe(
  //     (res: any) => {
  //       if (res.status == 1) {
  //         this.doctor_list.next(res);
  //       }
  //     }
  //   );
  // }
  // set_hospital_list(data) {
  //   let obj = {
  //     cat_id: data.cat_id,
  //     cat_name: data.cat_name,
  //   };
  //   this.postapi('hospital_list_category_wise_basic_detail', obj).subscribe(
  //     (res: any) => {
  //       if (res.status == 1) {
  //         this.hospital_list.next(res);
  //       }
  //     }
  //   );
  // }
  // set_treatement_detail(t_id) {
  //   let obj = {
  //     t_id: t_id,
  //   };
  //   this.postapi('get_treatment_detail', obj).subscribe((res: any) => {
  //     if (res.status == 1) {
  //       this.treatment_detail.next(res);
  //     }
  //   });
  // }
  postapi(body): any {
    return this.http
      .post(
        'https://auth.whitecoats.com/auth/realms/whitecoats/protocol/openid-connect/token',
        body
      )
      .pipe(map((res) => res));
  }

  getapi(x): Observable<any> {
    return this.http.get<any>(this.rootUrl + x).pipe(map((res) => res));
  }
}
