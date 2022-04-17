import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMedicinesComponent } from './product-medicines.component';

describe('ProductMedicinesComponent', () => {
  let component: ProductMedicinesComponent;
  let fixture: ComponentFixture<ProductMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
