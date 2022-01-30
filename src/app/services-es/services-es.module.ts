import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesEsComponent } from './components/services-es/services-es.component';
import { RouterModule } from '@angular/router';
import {ServicesEsRoutingModule} from './services-es-routing.module';
import {SharedModule} from './../shared/shared.module';
import {MaterialModule} from './../material/material.module';
import {ServicesModule} from './../services/services.module';

@NgModule({
  declarations: [ServicesEsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ServicesEsRoutingModule,
    SharedModule,
    MaterialModule,
    ServicesModule
  ]
})
export class ServicesEsModule { }
