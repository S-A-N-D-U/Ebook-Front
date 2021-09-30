import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private http: HttpClient , private router: Router ) { }

  
  show():Observable<any> {
    console.log("vvvvvvvvvvvv")
    return this.http.get("https://techflare.herokuapp.com" , {responseType: 'text'})

  }

}
