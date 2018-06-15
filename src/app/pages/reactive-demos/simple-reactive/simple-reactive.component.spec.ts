import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleReactiveComponent } from './simple-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

describe('SimpleReactiveComponent', () => {
  let component: SimpleReactiveComponent;
  let fixture: ComponentFixture<SimpleReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        BrowserModule,
      ],
      declarations: [ SimpleReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
