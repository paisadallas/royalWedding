import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEsComponent } from './components/home-es/home-es.component';
import {HomeEsRoutingModule} from'./home-es-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { HomeModule } from './../home/home.module';
@NgModule({
  declarations: [HomeEsComponent],
  imports: [
    CommonModule,
    HomeEsRoutingModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    HomeModule
  ]
})
export class HomeEsModule { }
