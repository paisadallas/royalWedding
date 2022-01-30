import { Component, Input, OnInit } from '@angular/core';
import {Galery} from './../../core/model/galery.model';
import {MatDialog} from '@angular/material/dialog';
import { MyMenuComponent } from '../my-menu/my-menu.component';
import { ZoomComponent } from '../zoom/zoom.component';

@Component({
  selector: 'app-image-galery',
  templateUrl: './image-galery.component.html',
  styleUrls: ['./image-galery.component.scss']
})
export class ImageGaleryComponent implements OnInit {

@Input() data:Galery[];
@Input() dataRight:Galery;

  constructor(
    public dialog: MatDialog
   ) { }

  ngOnInit(): void {
  }

  buttonClick(){
    console.log('print image'+this.data);
  }

  openImage(){
    const dialogRef = this.dialog.open(ZoomComponent,{
      width:'auto',
      height:'80%',
      data:{url:this.data}
    })
  }

  openImageRight(){
    const dialogRef = this.dialog.open(ZoomComponent,{
      width:'auto',
      height:'80%',
      data:{url:this.dataRight}
    })
  }

}

