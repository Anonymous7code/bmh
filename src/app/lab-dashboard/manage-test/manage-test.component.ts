import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-test',
  templateUrl: './manage-test.component.html',
  styleUrls: ['./manage-test.component.scss'],
})
export class ManageTestComponent implements OnInit {
  TestForm = new FormGroup({});
  LabsTestsData: any;
  IsUpdateBtn: boolean = false;
  TestUID: any;
  constructor(
    private _FormBuilder: FormBuilder,
    private _ApiService: ApiService
  ) {
    this.GetTests();
  }

  ngOnInit() {
    this.TestForm = this._FormBuilder.group({
      test_name: ['', Validators.required],
      test_desc: ['', Validators.required],
      test_price: ['', Validators.required],
    });
  }
  GetTests() {
    this._ApiService.GetLabsTest().subscribe((data) => {
      this.LabsTestsData = data;
    });
  }
  AddTest() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Test Added Successfully!',
      showConfirmButton: false,
      timer: 1000,
    });
    if (this.TestForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Fill The Test Details To Add Test.',
      });
    } else {
      if (this.IsUpdateBtn) {
        this._ApiService.EditingLabTests(this.TestUID.id, this.TestForm.value);
        this.GetTests();
        this.TestForm.reset();
        this.IsUpdateBtn = false;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Test Details Updated Successfully!',
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        this._ApiService.AddingTest(this.TestForm.value);
        this.TestForm.reset();
      }
    }
  }

  EditTests(data: any) {
    this.TestUID = data;
    this.IsUpdateBtn = true;
    this.TestForm.patchValue({
      test_name: data.test_name,
      test_desc: data.test_desc,
      test_price: data.test_price,
    });

    this._ApiService.EditingLabTests(this.TestUID.id, this.TestForm.value);
  }

  DeleteTests(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete the test?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0c8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this._ApiService.DeleteLabTests(id);
        Swal.fire('Deleted!', 'Test has been deleted!', 'success');
      }
    });
  }
}
