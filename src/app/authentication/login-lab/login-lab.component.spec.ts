import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLabComponent } from './login-lab.component';

describe('LoginLabComponent', () => {
  let component: LoginLabComponent;
  let fixture: ComponentFixture<LoginLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
