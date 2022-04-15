import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabViewDetailsComponent } from './lab-view-details.component';

describe('LabViewDetailsComponent', () => {
  let component: LabViewDetailsComponent;
  let fixture: ComponentFixture<LabViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
