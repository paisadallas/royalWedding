import { Component, Input, OnInit } from '@angular/core';
import {Customer} from '../../../core/model/customer.model';
import {AngularFirestore} from '@angular/fire/firestore';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private db:AngularFirestore,
  ) { }
 
  @Input() data: Customer;
getCustomer:Customer;
  ngOnInit(): void {
  }

  getData(){
    // var getCustomer = this.db.collection("customers",ref => ref.where('email','==','Karilalva12@gmail.com'));
   this.db.collection("customers",ref => ref.where('email','==','Karilalva12@gmail.com')).valueChanges({
     email: 'email'
   });

   console.log( this.db.collection("customers",ref => ref.where('email','==','Karilalva12@gmail.com')).valueChanges({
    email: 'email'
  }))
  
   }

  panelOpenState = false;
}
