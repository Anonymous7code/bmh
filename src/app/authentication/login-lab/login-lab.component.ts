import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-lab',
  templateUrl: './login-lab.component.html',
  styleUrls: ['./login-lab.component.scss'],
})
export class LoginLabComponent implements OnInit {
  LoginTitle = 'Labs';
  constructor() {
    console.log('LAB LOGIN MODULE LOADED');
  }

  ngOnInit(): void {}
}
