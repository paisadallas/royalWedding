import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryEsComponent } from './components/galery-es/galery-es.component';
import { RouterModule } from '@angular/router';
import {SharedModule} from './../shared/shared.module';
import {GaleryEsRoutingModule} from './galery-es-routing.module';

@NgModule({
  declarations: [GaleryEsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    GaleryEsRoutingModule
  ]
})
export class GaleryEsModule { }
