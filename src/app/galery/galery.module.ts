import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryComponent } from './components/galery/galery.component';
import { RouterModule } from '@angular/router';
import {GaleryRoutingModule} from './galery-routing.module';
import {SharedModule} from './../shared/shared.module';

@NgModule({
  declarations: [GaleryComponent],
  imports: [
    CommonModule,
    RouterModule,
    GaleryRoutingModule,
    SharedModule
  ]
})
export class GaleryModule { }
