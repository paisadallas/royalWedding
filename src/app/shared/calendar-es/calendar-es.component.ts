import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calendar-es',
  templateUrl: './calendar-es.component.html',
  styleUrls: ['./calendar-es.component.scss']
})
export class CalendarEsComponent implements OnInit {

  nameFiel = new FormControl('');
  emailFiel = new FormControl('');
  phoneFiel = new FormControl('');
  constructor() { }

  favoriteSeason: string;
  seasons: string[] = ['Mañana', 'Tarde', 'Noche', 'Cualquier Hora'];
  selected: Date | null;

  ngOnInit(): void {
  }

}
