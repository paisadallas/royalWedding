import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEsComponent } from './calendar-es.component';

describe('CalendarEsComponent', () => {
  let component: CalendarEsComponent;
  let fixture: ComponentFixture<CalendarEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
