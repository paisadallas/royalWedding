import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosEsComponent } from './components/videos-es/videos-es.component';
import { RouterModule } from '@angular/router';
import {VideosEsRoutingModule} from './videos-es-routing.module';
import {SharedModule} from './../shared/shared.module';

@NgModule({
  declarations: [VideosEsComponent],
  imports: [
    CommonModule,
    SharedModule,
    VideosEsRoutingModule,
    RouterModule
  ]
})
export class VideosEsModule { }
