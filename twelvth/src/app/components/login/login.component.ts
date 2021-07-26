import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform:FormGroup;

  constructor(private api:ApiService, private route:Router) { }

  ngOnInit(): void {

    this.api.access.subscribe(
      response=> {
        if(response) {
          this.route.navigate(['./home'])
          
        } else {
          console.log('stay in login component')
        }
      }
    )
    this.myform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  
  }


get f(){
  return this.myform.controls;
}

onSubmit(){
  this.api.login(this.f.username.value, this.f.password.value)
  .pipe(first())
  .subscribe(
    response => {
      console.log(response);
    }
  )

  this.myform.reset();
  

}

// logout(){
//   this.api.logout();
// }

}
