import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMenuEsComponent } from './my-menu-es.component';

describe('MyMenuEsComponent', () => {
  let component: MyMenuEsComponent;
  let fixture: ComponentFixture<MyMenuEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMenuEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMenuEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
