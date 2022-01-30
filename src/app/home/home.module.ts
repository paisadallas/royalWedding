import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import { RouterModule } from '@angular/router';
import { MarcoComponent } from './components/marco/marco.component';
import { SharedModule } from './../shared/shared.module';
import {MaterialModule} from './../material/material.module';

@NgModule({
  declarations: [HomeComponent, MarcoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ],
  exports:[
    HomeComponent,
    MarcoComponent
  ]
})
export class HomeModule { }
