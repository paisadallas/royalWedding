import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GaleryEsComponent} from './components/galery-es/galery-es.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:GaleryEsComponent
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
export class GaleryEsRoutingModule { }
