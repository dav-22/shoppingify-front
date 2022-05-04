import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if(!req.url.includes('register') && !req.url.includes('login')) {
      const token = JSON.parse(localStorage.getItem('currentUser')).token;
    
      if (!token) {
        return next.handle(req);
      }
      const headers = req.clone({
        headers: req.headers.set('authorization', token),
      });
      return next.handle(headers);
    }
    
    return next.handle(req);
  }
}
