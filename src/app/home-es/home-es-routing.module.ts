import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeEsComponent} from './components/home-es/home-es.component';


const routes: Routes =[
  {
    path:'',
    component:HomeEsComponent
  }
]


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
export class HomeEsRoutingModule { }
