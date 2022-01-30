import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 

  imageOne='../../../../assets/images/5.jpg'
  imageTwo = '../../../../assets/images/foto.jpg'
  imageThree = '../../../../assets/images/7.jpg'
  imageFour = '../../../../assets/images/25.jpg'

   
  constructor() { }

  ngOnInit(): void {
  }

  call(){
    window.open('tel:+18325412046');
  }

}
