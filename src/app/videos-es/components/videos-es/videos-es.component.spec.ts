import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosEsComponent } from './videos-es.component';

describe('VideosEsComponent', () => {
  let component: VideosEsComponent;
  let fixture: ComponentFixture<VideosEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
