import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumedalesPage } from './humedales.page';

describe('HumedalesPage', () => {
  let component: HumedalesPage;
  let fixture: ComponentFixture<HumedalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumedalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumedalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
