import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';


@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(private _api:ApiService, private route:Router){}
  canActivate(route: ActivatedRouteSnapshot,
    state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(this._api.authenticateUser()){
        console.log('dipti');
        return true;
      }
      else{
        this.route.navigate(['/']);
        return false;
      }
      
      
    }
  
  
  
}


