import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './components/videos/videos.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes =[
  {
    path:'',
    component:VideosComponent
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
export class VideosRoutingModule { }
