import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
 
  customerData = [];


  constructor(
    private _customerService: CustomerService,
    config: NgbModalConfig,
    private modalService: NgbModal ) { 
      config.backdrop = 'static';
      config.keyboard = false; 
    }

    
  open(content:any) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
    this._customerService.retrieveCustomers().subscribe(
      response => {
        console.log(response);
        this.customerData = response;
      }, error => {
        console.log(error);
      }
    );
}

// deleteCustomer(customerId){
//   this.customerData.splice(customerId,1);
// }


deleteCustomer(id){
  this._customerService.deleteCustomers(id).subscribe(
    response => {
      console.log(response);
    }, error => {
      console.log(error);
    }
  )

}

}
