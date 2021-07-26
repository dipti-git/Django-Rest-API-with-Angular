import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/gettoken/';

  private accessSubject: BehaviorSubject<any>;
  public access: Observable<any>;

  constructor(private http:HttpClient) {
    this.accessSubject= new BehaviorSubject<any>(JSON.parse(localStorage.getItem('access')));
    this.access= this.accessSubject.asObservable();
   }

  login(username:string, password: string) {
    return this.http.post<any>(this.baseUrl, {username, password}, httpOptions).pipe(
      map(user => {
        if (user && user.access) {
          
          localStorage.setItem('access', JSON.stringify(user.access));
          localStorage.setItem('refresh', JSON.stringify(user.access));
        
          this.accessSubject.next(user.access);
        }
        return user;
      })
    );
  } 

  getAccessToken() {
    return localStorage.getItem('access');
  }

  authenticateUser(){
    if(localStorage.getItem('access')){
      return true;
    } else {
      return false;
    }
  }


  logout() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');

    this.accessSubject.next(null);


  }

}
 




















// import { Injectable, Output } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { Subject } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// };

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

// baseUrl = 'http://127.0.0.1:8000/gettoken/';
// @Output() loggedIn = new Subject<boolean>();

//   constructor(private http:HttpClient) { }

//   login(username:string, password: string) {
//     return this.http.post<any>(this.baseUrl, {username, password}, httpOptions).pipe(
//       map(user => {
//         if(user && user.access) {
//           localStorage.setItem('dipti', JSON.stringify(user));
//           this.loggedIn.next(true);
//         }
//         return user;
//       })
//     );
//   }

//   authenticateUser(){
//     if(localStorage.getItem('dipti')){
//       return true;
//     } else {
//       return false;
//     }
//   }


//   logout() {
//     localStorage.removeItem('dipti');
//     this.loggedIn.next(false);

//   }
// }
