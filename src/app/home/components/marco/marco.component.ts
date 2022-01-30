import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-marco',
  templateUrl: './marco.component.html',
  styleUrls: ['./marco.component.scss']
})
export class MarcoComponent implements OnInit {

  @Input() Image:String;
  constructor() { }

  ngOnInit(): void {
  }

}
