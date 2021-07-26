import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable()
export class CustomerInterceptor implements HttpInterceptor {
    constructor(private api:ApiService){ }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.api.getAccessToken();

    if(token){
        httpRequest = httpRequest.clone({
            setHeaders:{
                Authorization: token

            }
        }) 
    }
    return next.handle(httpRequest);
  }
}




//acces localstorage, check accesstoken, if ( append - accesstoken ) 