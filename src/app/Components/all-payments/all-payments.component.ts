import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-all-payments',
  templateUrl: './all-payments.component.html',
  styleUrls: ['./all-payments.component.css']
})
export class AllPaymentsComponent implements OnInit {
  paymentDetails: any;

  constructor(private pay:PaymentService) { }

  ngOnInit(): void {
    this.pay.showAllPayments().subscribe(posts => {
      this.paymentDetails = posts;
      console.log(this.paymentDetails)
    },
    err => {
      console.log(err)
    })
  }

}
