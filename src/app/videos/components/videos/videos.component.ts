import { Component, OnInit } from '@angular/core';
import {Galery} from './../../../core/model/galery.model';
import {ActivatedRoute, Params} from '@angular/router';
import {GaleryService} from '../../../core/data/galery.service';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos:Galery[];
  constructor(private galeryServices :GaleryService,  
    private route:ActivatedRoute) { }

  ngOnInit(): void {
        //Galery
        this.route.params.subscribe((params:Params) =>{
           
          this.videos = this.galeryServices.getVideo();
        })
  }

}
