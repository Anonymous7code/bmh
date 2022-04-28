import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  User: any;
  DoctorCollection!: AngularFirestoreCollection<any>;
  PatientCollection!: AngularFirestoreCollection<any>;
  LabCollection!: AngularFirestoreCollection<any>;
  LabTestsCollection!: AngularFirestoreCollection<any>;
  LabTests: Observable<any[]>;
  Docs: Observable<any[]>;
  Patient: Observable<any[]>;
  Lab: Observable<any[]>;
  rootUrl;
  baseUrl;
  doctor_array: any = [];
  hospital_array: any = [];
  treatment_detail_obj: any = {};
  doctor_list = new BehaviorSubject(this.doctor_array);
  hospital_list = new BehaviorSubject(this.hospital_array);
  treatment_detail = new BehaviorSubject(this.treatment_detail_obj);
  constructor(
    private _FireStore: AngularFirestore,
    private http: HttpClient,
    private _FireAuth: AngularFireAuth,
    private _Route: Router
  ) {
    this.DoctorCollection = this._FireStore.collection('Doctors');
    this.PatientCollection = this._FireStore.collection('Patients');
    this.LabCollection = this._FireStore.collection('Labs');
    this.LabTestsCollection = this._FireStore.collection('Labs Tests');
    this.LabTests = this._FireStore.collection('Labs Tests').valueChanges();
    this.Docs = this._FireStore.collection('Doctors').valueChanges();
    this.Patient = this._FireStore.collection('Patients').valueChanges();
    this.Lab = this._FireStore.collection('Labs').valueChanges();
    this._FireAuth.authState.subscribe((auth) => {
      this.User = auth;
      console.log('USER', this.User);
    });

    this.rootUrl =
      'https://auth.whitecoats.com/auth/realms/whitecoats/protocol/openid-connect/token';
    // this.baseUrl =
    //   'https://appointments-sandbox.whitecoats.com/';
    // this.baseUrl =
    //   'https://appointments-sandbox.whitecoats.com/';
    // this.baseUrl = 'http://13.234.100.92:9999/';
    this.baseUrl = 'https://appointments-sandbox.whitecoats.com/';
  }

  GetLabs() {
    return this.Lab;
  }
  GetLabsTest() {
    return this.LabTests;
  }
  // LOGIN FOR DOCTOR METHOD
  LogInForDoc(Doc_Email: string, Doc_Password: string) {
    this._FireAuth
      .signInWithEmailAndPassword(Doc_Email, Doc_Password)
      .then(() => {
        console.log(Doc_Email, Doc_Password);
        let cYpheRConCs28428eAl = Math.floor(Math.random() * 9999999999);
        let EncodedcYErGGDRNUU3563JJ = cYpheRConCs28428eAl.toString();
        localStorage.setItem('cYpheRConCeAl', EncodedcYErGGDRNUU3563JJ);

        // LOGIN ALERT
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully',
        });
        this._Route.navigate(['/doctor-dashboard']);
      })
      .catch((error) => {
        //  LOGIN ERROR ALERT
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        });
      });
  }

  // REGISTER FOR DOCTOR METHOD
  RegistrationForDoc(email: string, password: string) {
    this._FireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        let cYpheRConCs28428eAl = Math.floor(Math.random() * 9999999999);
        let EncodedcYErGGDRNUU3563JJ = cYpheRConCs28428eAl.toString();
        localStorage.setItem('cYpheRConCeAl', EncodedcYErGGDRNUU3563JJ);
        // REGISTRATION ALERT
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Registered Successfully!',
        });
        this._Route.navigate(['/doctor-dashboard']);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  // LOGIN FOR PATIENT METHOD
  LogInForPatient(email: string, password: string) {
    this._FireAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        let cYpheRConCs28428eAl = Math.floor(Math.random() * 9999999999);
        let EncodedcYErGGDRNUU3563JJ = cYpheRConCs28428eAl.toString();
        localStorage.setItem('cYpheRConCeAl', EncodedcYErGGDRNUU3563JJ);
        // LOGIN ALERT
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully',
        });
        this._Route.navigate(['/patient-dashboard']);
      })
      .catch((error) => {
        //  LOGIN ERROR ALERT
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        });
      });
  }

  // REGISTER FOR PATIENT METHOD
  RegistrationForPatient(email: string, password: string) {
    this._FireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        let cYpheRConCs28428eAl = Math.floor(Math.random() * 9999999999);
        let EncodedcYErGGDRNUU3563JJ = cYpheRConCs28428eAl.toString();
        localStorage.setItem('cYpheRConCeAl', EncodedcYErGGDRNUU3563JJ);
        // REGISTRATION ALERT
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Registered Successfully!',
        });
        this._Route.navigate(['/patient-dashboard']);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  // LOGIN FOR LAB METHOD
  LogInForLab(email: string, password: string) {
    this._FireAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        let cYpheRConCs28428eAl = Math.floor(Math.random() * 9999999999);
        let EncodedcYErGGDRNUU3563JJ = cYpheRConCs28428eAl.toString();
        localStorage.setItem('cYpheRConCeAl', EncodedcYErGGDRNUU3563JJ);
        // LOGIN ALERT
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully',
        });
        this._Route.navigate(['/lab-dashboard']);
      })
      .catch((error) => {
        //  LOGIN ERROR ALERT
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        });
      });
  }

  // REGISTER FOR LAB METHOD
  RegistrationForLab(email: string, password: string) {
    this._FireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        let cYpheRConCs28428eAl = Math.floor(Math.random() * 9999999999);
        let EncodedcYErGGDRNUU3563JJ = cYpheRConCs28428eAl.toString();
        localStorage.setItem('cYpheRConCeAl', EncodedcYErGGDRNUU3563JJ);

        // REGISTRATION ALERT
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Registered Successfully!',
        });
        this._Route.navigate(['/lab-dashboard']);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  // SIGNOUT METHOD
  LogOut() {
    this._FireAuth
      .signOut()
      .then(() => {
        localStorage.removeItem('cYpheRConCeAl');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Log Out Successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
        this._Route.navigate(['']);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  GetDocDetails() {
    return this.Docs;
  }
  GetLabDetails() {
    return this.Lab;
  }
  GetPatientDetails() {
    return this.Patient;
  }
  AddTest() {}

  DocRegistration(data: any) {
    return this.DoctorCollection.add(data);
  }
  PatientRegistration(data: any) {
    return this.PatientCollection.add(data);
  }
  LabRegistration(data: any) {
    return this.LabCollection.add(data);
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
    console.log('docid', doctorlist[0]);

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
      this.baseUrl +
        `v1/patients/list?phone=${this.patientDetail}interfaceId?=55112`,
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
  patientDetail: any;
  setDocId(x) {
    this.docId = x;
  }

  getDocId() {
    return this.docId;
  }

  setpatientDetail(x) {
    sessionStorage.setItem('patientDetail', x);
    this.patientDetail = x;
  }

  getpatientDetail() {
    let patientDetail = sessionStorage.getItem('patientDetail');
    return patientDetail;
  }

  patientlist: any;
  setpatientlist(x) {
    // sessionStorage.setItem('patientlist', x);
    this.patientlist = x;
  }

  getpatientlist() {
    // let patientlist = sessionStorage.getItem('patientlist');
    return this.patientlist;
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
