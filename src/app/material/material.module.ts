import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule
  ],
  exports:[
    MatNativeDateModule,
    MatCardModule,
    MatDatepickerModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule { }
