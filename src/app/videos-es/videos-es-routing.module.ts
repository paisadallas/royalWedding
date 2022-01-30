import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {VideosEsComponent} from './components/videos-es/videos-es.component';
const routes: Routes =[
  {
    path:'',
    component:VideosEsComponent
  }
]

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
export class VideosEsRoutingModule { }
