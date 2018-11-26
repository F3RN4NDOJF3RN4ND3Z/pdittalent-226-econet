import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumedalNoticiasPage } from './humedal-noticias.page';

describe('HumedalNoticiasPage', () => {
  let component: HumedalNoticiasPage;
  let fixture: ComponentFixture<HumedalNoticiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumedalNoticiasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumedalNoticiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
