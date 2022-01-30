import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ServicesEsComponent} from './components/services-es/services-es.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesEsComponent
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
export class ServicesEsRoutingModule { }
