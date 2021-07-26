import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private api:ApiService, private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.api.logout();
    this.route.navigate(['./login']);
  }

}
