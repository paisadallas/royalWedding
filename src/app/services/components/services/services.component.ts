import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {PackageService} from './../../../core/data/package.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

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
