import { Injectable } from '@angular/core';
import {Customer} from '../model/customer.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private fb: AngularFirestore
  ) { }

  customer:Customer[]=[
    {
      id:'dd',
      register:'10 DICIEMBRE',
      day: '18 de enero',
      name:'Juanita',
      email:'juanita@juanita.com',
      phone:'3317 897 56 23',
      contacted:'Morning'
    },
    {
      id:'dd',
      register:'fecha',
      day: 'kdkd',
      name:'dsdf',
      email:'asdf',
      phone:'sdf',
      contacted:'sdfsdf'
    }
  ]

  getUser(){
    return this.customer;
  }

  getData(){
    return this.fb.collection('customers').valueChanges();
  }
  
}
