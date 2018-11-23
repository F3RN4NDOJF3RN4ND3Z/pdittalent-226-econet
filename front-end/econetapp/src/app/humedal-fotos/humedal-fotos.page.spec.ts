import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumedalFotosPage } from './humedal-fotos.page';

describe('HumedalFotosPage', () => {
  let component: HumedalFotosPage;
  let fixture: ComponentFixture<HumedalFotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumedalFotosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumedalFotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
