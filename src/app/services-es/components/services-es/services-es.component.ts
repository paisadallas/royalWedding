import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {PackageService} from './../../../core/data/package.service';

@Component({
  selector: 'app-services-es',
  templateUrl: './services-es.component.html',
  styleUrls: ['./services-es.component.scss']
})
export class ServicesEsComponent implements OnInit {

  dataEs
  constructor(
    private dataPackage:PackageService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      this.dataEs = this.dataPackage.getPackageEs();
    })
  }

}
