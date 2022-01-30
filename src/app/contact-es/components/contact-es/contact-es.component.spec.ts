import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEsComponent } from './contact-es.component';

describe('ContactEsComponent', () => {
  let component: ContactEsComponent;
  let fixture: ComponentFixture<ContactEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
