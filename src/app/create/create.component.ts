import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../services/customer/customer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Province} from "../models/Province";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  customerForm: FormGroup;
  provinces: Province[] = [];
  province: Province;
  isCreate=true;
  keywordProvince= 'name';
  constructor(private customerSv: CustomerService) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]),
      contact: new FormControl('', Validators.required),
      province: new FormControl('', Validators.required)
    });
    this.listProvince();
  }
  listProvince(){
    this.customerSv.listProvince().subscribe( item =>{
      this.provinces=item;
    }, error => {console.log('province error!!!!')})
  }
  createCs(){
    const customer1: any = this.customerForm.value;
    this.customerSv.createCustomer(customer1).subscribe(item => {
      alert('them thanh cong');
      this.customerForm.reset();
    }, error => {console.log('loi create'); });
  }
  checkCreate(){
    const province: any = this.customerForm.value.province;
    console.log('After province', province);
    if (this.provinces.includes(province)){
      this.isCreate = false;
    }else {
      this.isCreate = true;
    }
    console.log('isCreate', this.isCreate);
  }

}
