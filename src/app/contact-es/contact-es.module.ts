import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactEsComponent } from './components/contact-es/contact-es.component';
import { RouterModule } from '@angular/router';
import {ContactEsRoutingModule} from './contact-es-routing.module';
import {SharedModule} from './../shared/shared.module';

@NgModule({
  declarations: [ContactEsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ContactEsRoutingModule,
    SharedModule
  ]
})
export class ContactEsModule { }
