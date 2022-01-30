import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-es',
  templateUrl: './home-es.component.html',
  styleUrls: ['./home-es.component.scss']
})
export class HomeEsComponent implements OnInit {

  constructor() { }

  imageOne='../../../../assets/images/5.jpg'
  imageTwo = '../../../../assets/images/foto.jpg'
  imageThree = '../../../../assets/images/7.jpg'
  imageFour='../../../../assets/images/25.jpg'

  ngOnInit(): void {
  }

  
  call(){
    window.open('tel:+18325412046');
  }

}
