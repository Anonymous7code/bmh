import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-your-appointment',
  templateUrl: './your-appointment.component.html',
  styleUrls: ['./your-appointment.component.scss'],
})
export class YourAppointmentComponent implements OnInit {
  AppointmentsData: any;
  orderToken = '';
  IsPaid: boolean;
  rzp1: any;

  constructor(private _ApiService: ApiService) {}

  ngOnInit() {
    this._ApiService.GetBookedAppointments().subscribe((data) => {
      this.AppointmentsData = data;
      // console.log(this.AppointmentsData);
    });
  }

  // PAYMENT GATEWAY
  // json gateway keys
  // key  = rzp_live_R9e2e3EkfIjb4a;
  // keysecrete = Fioa0OxBGtHgsbdPyGh7xzb1;
  // test
  // key = rzp_test_iMvNDXDXgLoZ8B
  // keysecrete = dD6I2hXOMw4OMl9h6BmA1GSC

  pay(data) {
    console.log(data);

    let options = {
      key: 'rzp_test_iMvNDXDXgLoZ8B', // Enter the Key ID generated from the Dashboard
      amount: '100', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: data.name,
      description: 'Test Transaction',
      image: './././assets/logo/heart logo.png',
      order_id: '', //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        Swal.fire({
          icon: 'success',
          title: 'Your Payment Id <br>' + response.razorpay_payment_id,
          text: 'Payment Successful!!',
        });
        this.testing(response);
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: data.name,
        email: data.email,
        contact: data.mobile,
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#4b49ac',
      },
    };

    this.rzp1 = new this._ApiService.nativeWindow.Razorpay(options);
    this.rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    this.rzp1.open();
  }
}
