import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesEsComponent } from './services-es.component';

describe('ServicesEsComponent', () => {
  let component: ServicesEsComponent;
  let fixture: ComponentFixture<ServicesEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
