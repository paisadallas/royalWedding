import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../core/data/customer.service';
import {Customer} from '../../../core/model/customer.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
showCustomer:boolean = false;
incorrect:boolean = false;
password:string= "Ixmata";

  customer:Customer[];
  constructor(
    private customerServices: CustomerService,
    private route: ActivatedRoute,
    
  ) { 
    this.customerServices.getData().subscribe((customerFb:Customer[])=>{
      console.log(customerFb);
      this.customer = customerFb;
    })


  }

  addPassword(newItem: string){
   
    if(newItem==this.password){

      this.showCustomer = true;
      this.incorrect = false;
    }
    else{
      this.showCustomer= false;
      this.incorrect = true;
    }
  }

  ngOnInit(): void {
    // this.route.params.subscribe((params:Params) =>{
    //   this.customer = this.customerServices.getUser();
    //   console.log(this.customer)
    // })
  }

  //nothing




  panelOpenState = false;
}
