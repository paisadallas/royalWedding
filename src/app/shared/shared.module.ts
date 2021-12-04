import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { CalendarComponent } from './calendar/calendar.component';
import {MaterialModule} from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ImageGaleryComponent } from './image-galery/image-galery.component';
import { VideoComponent } from './video/video.component';
@NgModule({
  declarations: [HeaderComponent, FooterComponent,MyMenuComponent, CalendarComponent, ImageGaleryComponent, VideoComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MyMenuComponent,
    CalendarComponent,
    ImageGaleryComponent,
    VideoComponent
    
  ]
})
export class SharedModule { }
