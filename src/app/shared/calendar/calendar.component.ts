import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  nameFiel = new FormControl('');
  emailFiel = new FormControl('');
  phoneFiel = new FormControl('');
  ngModel

  favoriteSeason: string;
  seasons: string[] = ['Mañana', 'Tarde', 'Noche', 'Cualquier Hora'];

  selected: Date | null;
  constructor() { }

  ngOnInit(): void {
  }



}
