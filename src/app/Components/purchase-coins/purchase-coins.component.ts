import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
declare var payhere: any;

@Component({
  selector: 'app-purchase-coins',
  templateUrl: './purchase-coins.component.html',
  styleUrls: ['./purchase-coins.component.css']
})
export class PurchaseCoinsComponent implements OnInit {
coinsDetails = [
  { Package:'1' ,amount:"10" , price: 150 },
  { Package:'2',amount:"50" , price: 600 },
  { Package:'3',amount:"100" , price: 1000 },
  { Package:'4',amount:"200" , price: 1800 },
]
  details: any;
  userId: any;
  firstName: any;
  lastName: any;
  remainingCoins:any
  // price:any
  // amount:any

  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.profile().subscribe(
      user => {
        console.log(user);
        this.details = user;
        this.userId=this.details._id
        console.log(this.userId+' eded')
        this.firstName=this.details.firstName
        this.lastName=this.details.lastName
        this.remainingCoins=this.details.totalCoins;
        console.log(this.remainingCoins)

        // console.log(this.details);
      },
      err => {
        console.error(err);
      }
    )
    payhere.onCompleted=(orderId)=>{
      // alert('Payment is successfull '+orderId)
      console.log('completed')


    }

    payhere.onDismissed = function onDismissed() {
      alert('Payment dismissed');
      // this.toastr.info("Payment dismissed","",{
      //   timeOut:2000
      // })
    };

    payhere.onError = function onError(error) {
      alert('Error:' + error);
    };
  }

  payNow(amount:any,price:any){
    console.log(amount+' ddddd '+price+' jjj'+this.userId)

    const payment = {
      sandbox: true,
      merchant_id: '1218826',       // Replace your payhere Merchant ID /*Goto payhere account -> settings-> copy merchantId and replace */
      return_url: 'https://readers-fantacy.ml/#/manageCoins',
      cancel_url: 'http://sample.com/cancel',
      notify_url: 'https://techflare.herokuapp.com/payments/payment',
      order_id: this.userId, //replace value of this field as your requirement
      items: 'Coins' ,
      custom_1: amount,
      amount: price,
      currency: 'LKR',
      adOwnerId: "xxxx",
      first_name: this.firstName,
      last_name: this.lastName,
      email: "sample_user@gmail.com",
      phone: '0771234567',
      address: 'No.1, Galle Road',
      city: 'Colombo',
      country: 'Sri Lanka',
      delivery_address: 'No. 46, Galle road, Kalutara South',
      delivery_city: 'Kalutara',
      delivery_country: 'Sri Lanka',
      user_Id: this.userId




    };
 
      payhere.startPayment(payment);

      


  }

}
