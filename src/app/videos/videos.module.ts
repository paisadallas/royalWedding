import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './components/videos/videos.component';
import { RouterModule } from '@angular/router';
import {VideosRoutingModule} from './videos-routing.module';
import {SharedModule} from './../shared/shared.module';

@NgModule({
  declarations: [VideosComponent],
  imports: [
    CommonModule,
    RouterModule,
    VideosRoutingModule,
    SharedModule
  ]
})
export class VideosModule { }
