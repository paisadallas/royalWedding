import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { RouterModule } from '@angular/router';
import {ServicesRoutingModule} from './services-routing.module';
import {SharedModule} from './../shared/shared.module';
import { PackageComponent } from './components/package/package.component';
import { ItemsComponent } from './components/items/items.component';
import {MaterialModule} from './../material/material.module';


@NgModule({
  declarations: [ServicesComponent, PackageComponent, ItemsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ServicesRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports:[
    PackageComponent,
    ItemsComponent
  ]
})
export class ServicesModule { }
