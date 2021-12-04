import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { RouterModule } from '@angular/router';
import {ServicesRoutingModule} from './services-routing.module';
import {SharedModule} from './../shared/shared.module';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    RouterModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
