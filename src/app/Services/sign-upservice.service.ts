import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})



export class SignUpserviceService {

  private baseUrl: string= "https://localhost/3000";

  constructor(private httpClient: HttpClient) { }

  insertData(data: Event){
    return this.httpClient.post(this.baseUrl, data);
  }
}

