import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumedalDenunciasPage } from './humedal-denuncias.page';

describe('HumedalDenunciasPage', () => {
  let component: HumedalDenunciasPage;
  let fixture: ComponentFixture<HumedalDenunciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumedalDenunciasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumedalDenunciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
