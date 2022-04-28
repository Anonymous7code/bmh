import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  LabTests: any;
  constructor(private _ApiService: ApiService) {
    this._ApiService.GetLabsTest().subscribe((lab) => {
      this.LabTests = lab;
    });
  }
  // reactiveForm:FormGrop
  ngOnInit(): void {
    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('client_id', '05e7bbe7-19ce-4175-b2cc-4b407bc825f9');
    body.set('client_secret', '975a20ef-c0c8-424e-abff-5fe9c167e955');
    body.set('username', 'sandboxuser');
    body.set('password', 'vn5ZkUsYed7CM6g');
    console.log('body', body.toString());

    // this.reativeForm = this.fb.group({
    // grant_type:["password"],
    // client_id:["05e7bbe7-19ce-4175-b2cc-4b407bc825f9"],
    // client_secret:["975a20ef-c0c8-424e-abff-5fe9c167e955"],
    // username:["zapieruser"],
    // password:["WhiteCoats@2022"]
    //       UserName: sandboxuser
    // password: vn5ZkUsYed7CM6g
    // client-id: 05e7bbe7-19ce-4175-b2cc-4b407bc825f9
    // client_secret: 975a20ef-c0c8-424e-abff-5fe9c167e955
    // })
    // const body={
    //   grant_type:"password",
    //   client_id:"05e7bbe7-19ce-4175-b2cc-4b407bc825f9",
    //   client_secret:"975a20ef-c0c8-424e-abff-5fe9c167e955",
    //   username:"sandboxuser",
    //   password:"vn5ZkUsYed7CM6g"
    // }
    this._ApiService.postHeader(body.toString()).subscribe((res) => {
      if (res) {
        console.log('res', res);
        this._ApiService.setLogindata(res.access_token);
      }
    });
  }
}
