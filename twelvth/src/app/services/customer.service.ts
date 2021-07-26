import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  base_url =  'http://127.0.0.1:8000';

  constructor(private http:HttpClient) { }

  retrieveCustomers(){
    return this.http.get<any>(`${this.base_url}/customerview/`);
    
  }

  deleteCustomers(id){
    return this.http.delete<any>(`${this.base_url}/customerview/${id}`);
    

  }


}
