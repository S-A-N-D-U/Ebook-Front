import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.headers.has('Skip_Interceptor')){
      let headers = request.headers.delete('Skip_Interceptor');
      return next.handle(request.clone({headers}));
    }

    const Token = localStorage.getItem('userToken');
    return next.handle(request.clone({setHeaders: {Token}}));

  }
}
