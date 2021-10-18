import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-my-payments',
  templateUrl: './my-payments.component.html',
  styleUrls: ['./my-payments.component.css']
})
export class MyPaymentsComponent implements OnInit {
  details: any;
  userId: any;
  coins: any;
  paymentDetails: any;

  constructor(private pay:PaymentService , private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.auth.profile().subscribe(
      user => {
        console.log(user);
        this.details = user;
        this.userId=this.details._id
        console.log(this.userId+' eded')
        this.pay.showMyPayments(this.userId).subscribe(posts => {
          console.log(this.userId+'www')
          this.paymentDetails = posts;
          console.log(this.paymentDetails)
        },err => {
          console.log(err)
        })
      },
      err => {
        console.error(err);
      }
    )


  }

  

}
