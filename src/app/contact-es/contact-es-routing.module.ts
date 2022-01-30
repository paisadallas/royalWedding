import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ContactEsComponent} from './components/contact-es/contact-es.component';

const routes: Routes = [
  {
    path: '',
    component: ContactEsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class ContactEsRoutingModule { }
