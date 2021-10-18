import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable , of } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient , private router: Router) { }

  // getting all payments
  showAllPayments():Observable<any>{
    console.log('wewe')
    return this.http.get('http://localhost:5000/payments/getAllPayments')
  }

  // getting a readers payments
  showMyPayments(userId:any):Observable<any>{
    console.log('wewe12')
    return this.http.get('http://localhost:5000/payments/getMyPayments/'+userId)
  }
}
