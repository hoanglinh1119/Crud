import { Component, OnInit } from '@angular/core';
import {Customer} from "../models/Customer";
import {CustomerService} from "../services/customer/customer.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customer: Customer[] = [] ;
  constructor(private customerSV: CustomerService) { this.getListCs();}

  ngOnInit(): void {
  }
  getListCs(){
    this.customerSV.listCustomer().subscribe(item => {
      this.customer = item;
    }, error => {
      console.log('co loi');
    });
  }
}
