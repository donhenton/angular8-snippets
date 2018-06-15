import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayItemComponent } from './display-item.component';
import { KeepHtmlPipe } from '../../../keep-html/keep-html';


describe('DisplayItemComponent', () => {
  let component: DisplayItemComponent;
  let fixture: ComponentFixture<DisplayItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayItemComponent, KeepHtmlPipe ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
