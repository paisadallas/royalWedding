import { Component, Input, OnInit } from '@angular/core';
import {Galery} from './../../core/model/galery.model';

@Component({
  selector: 'app-image-galery',
  templateUrl: './image-galery.component.html',
  styleUrls: ['./image-galery.component.scss']
})
export class ImageGaleryComponent implements OnInit {

@Input() data:Galery[];

  constructor(
   ) { }

  ngOnInit(): void {

  }

}
