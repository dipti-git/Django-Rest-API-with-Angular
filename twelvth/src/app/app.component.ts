import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Django Rest API Authentication with Angular';
  
  showNavbar = false;

  constructor(private _api:ApiService){

  }

  ngOnInit(){
    this._api.access.subscribe(
      response => {
        console.log(response);
        if(response) {
          this.showNavbar = true;
        } else {
          this.showNavbar = false;
        }
      }
    )
  }
}
