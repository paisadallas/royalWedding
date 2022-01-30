import { Component, OnInit } from '@angular/core';
import {GaleryService} from '../../../core/data/galery.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Galery} from './../../../core/model/galery.model';

@Component({
  selector: 'app-galery-es',
  templateUrl: './galery-es.component.html',
  styleUrls: ['./galery-es.component.scss']
})
export class GaleryEsComponent implements OnInit {

  galery:Galery[];
  videos:Galery[];
  constructor(private galeryServices :GaleryService,  
    private route:ActivatedRoute) { }

  ngOnInit(): void {
       //Galery
       this.route.params.subscribe((params:Params) =>{
        this.galery = this.galeryServices.getGalery();     
        this.videos = this.galeryServices.getVideo();
      })
  }

}
