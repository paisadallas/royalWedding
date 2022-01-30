import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryEsComponent } from './galery-es.component';

describe('GaleryEsComponent', () => {
  let component: GaleryEsComponent;
  let fixture: ComponentFixture<GaleryEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleryEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
