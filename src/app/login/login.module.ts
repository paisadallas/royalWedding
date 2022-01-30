import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {LoginRoutingModule} from './login-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import {MaterialModule} from './../material/material.module';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [LoginComponent, UserComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ]
})
export class LoginModule { }
