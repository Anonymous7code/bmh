import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabInvoiceComponent } from './lab-invoice.component';

describe('LabInvoiceComponent', () => {
  let component: LabInvoiceComponent;
  let fixture: ComponentFixture<LabInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
