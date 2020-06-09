import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../models/Customer";
import {Province} from "../../models/Province";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    // listCsUrl='http://localhost:8080/api/list';
    listProvinceUrl='http://localhost:8080/api/list/province';
    // createCsUrl='http://localhost:8080/api/create';

  constructor(private httpClient: HttpClient) {}

  listCustomer():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>('http://localhost:8080/api/list');
  }
  createCustomer(customer: Customer): Observable<Customer>{
    return this.httpClient.post<Customer>('http://localhost:8080/api/create',customer)
  }
  listProvince(): Observable<Province[]>{
    return this.httpClient.get<Province[]>('http://localhost:8080/api/list/province')
  }
}
