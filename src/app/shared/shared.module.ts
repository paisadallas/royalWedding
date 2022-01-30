import { NgModule} from '@angular/core';
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
import { MyMenuEsComponent } from './my-menu-es/my-menu-es.component';
import { CalendarEsComponent } from './calendar-es/calendar-es.component';
import { ZoomComponent } from './zoom/zoom.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [HeaderComponent, FooterComponent,MyMenuComponent, CalendarComponent, ImageGaleryComponent, VideoComponent, MyMenuEsComponent, CalendarEsComponent, ZoomComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MyMenuComponent,
    CalendarComponent,
    ImageGaleryComponent,
    VideoComponent,
    MyMenuEsComponent,
    CalendarEsComponent
    
  ]
})
export class SharedModule { }
