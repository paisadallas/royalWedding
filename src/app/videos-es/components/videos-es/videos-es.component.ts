import { Component, OnInit } from '@angular/core';
import {Galery} from './../../../core/model/galery.model';
import {ActivatedRoute, Params} from '@angular/router';
import {GaleryService} from '../../../core/data/galery.service';
@Component({
  selector: 'app-videos-es',
  templateUrl: './videos-es.component.html',
  styleUrls: ['./videos-es.component.scss']
})
export class VideosEsComponent implements OnInit {
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
