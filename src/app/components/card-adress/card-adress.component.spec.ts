/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardAdressComponent } from './card-adress.component';

describe('CardAdressComponent', () => {
  let component: CardAdressComponent;
  let fixture: ComponentFixture<CardAdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
