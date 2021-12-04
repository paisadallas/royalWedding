import { Component, Input, OnInit } from '@angular/core';
import {Galery} from './../../core/model/galery.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() data:Galery[];
  constructor() { }

  ngOnInit(): void {
  }

}
