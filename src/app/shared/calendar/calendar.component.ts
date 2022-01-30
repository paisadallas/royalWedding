import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Customer} from '../../core/model/customer.model';
import {AngularFirestore} from '@angular/fire/firestore';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

 // nameFiel = new FormControl('');
  //emailFiel = new FormControl('');
  //phoneFiel = new FormControl('');



  nameFiel = new FormControl('',{validators: Validators.required});
  emailFiel = new FormControl('',{validators: Validators.required});
  phoneFiel = new FormControl('',{validators: Validators.required});


  favoriteContact: string;

  seasons: string[] = ['Morning', 'Afternoon', 'Night', 'Any time'];

  customer:Customer;
    


  selected: Date | null;
  

  constructor(
    private fb:AngularFirestore
  ) {
    console.log(this.formatDDMMMYYY(new Date))
   }

   formatDDMMMYYY(date: Date): string {
    return date.getDate().toString() + '/' + (date.getMonth()+1).toString() + '/' + date.getFullYear().toString();
 }

 


  ngOnInit(): void {
  }

async  getId(params:string) {

  
}



validatorCheck(){
 

  if(this.nameFiel.status=="VALID"&&
  this.emailFiel.status=="VALID"&&
  this.phoneFiel.status=="VALID"){


         this.customer={ 
          
          id: '1',
          register:this.formatDDMMMYYY(new Date),
          day: this.formatDDMMMYYY(this.selected),
          name:this.nameFiel.value,
          email: this.emailFiel.value,
          phone:this.phoneFiel.value,
          contacted: this.favoriteContact
        
      }
       this.setDocument(this.customer)
      
  }
}


  async setDocument(custo:Customer) {
    this.fb.collection('customers').doc().set(custo)
 

  }

}
