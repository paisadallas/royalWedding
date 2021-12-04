import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import {ContactRoutingModule} from './contact-routing.module';
import {SharedModule} from './../shared/shared.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
