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
export class SharedataService {
  constructor() {}

  set_doc_wise_detail(data) {
    sessionStorage.setItem('doctor_data', JSON.stringify(data));
    console.log('doctor_data', data);
  }
  get_doc_wise_detail() {
    return JSON.parse(sessionStorage.getItem('doctor_data'));
  }

  set_hos_wise_detail(data) {
    sessionStorage.setItem('hospital_data', JSON.stringify(data));
    console.log('hospital_data', data);
  }
  get_hos_wise_detail() {
    return JSON.parse(sessionStorage.getItem('hospital_data'));
  }
}
