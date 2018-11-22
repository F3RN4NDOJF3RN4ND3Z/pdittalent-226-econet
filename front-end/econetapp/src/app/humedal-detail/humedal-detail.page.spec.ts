import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumedalDetailPage } from './humedal-detail.page';

describe('HumedalDetailPage', () => {
  let component: HumedalDetailPage;
  let fixture: ComponentFixture<HumedalDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumedalDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumedalDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
