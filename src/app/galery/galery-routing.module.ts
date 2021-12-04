import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GaleryComponent} from './components/galery/galery.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:GaleryComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class GaleryRoutingModule { }
