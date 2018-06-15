import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirtDemoComponent } from './birt-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BirtService } from '../support/birtService';
import { ActivatedRoute } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx'; // NOT from 'rxjs/Rx/Observable
let component: BirtDemoComponent;
let fixture: ComponentFixture<BirtDemoComponent>;

describe('BirtDemoComponent', () => {

  const routeStub = {
    data: null
  };

  beforeEach(async(() => {

    routeStub.data = Observable.of({

         officeList: [{officeCode: '1', employees: []}]
      }
     );


    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        BrowserModule,
      ],
      providers: [BirtService, { provide: ActivatedRoute, useValue: routeStub }] ,
      declarations: [BirtDemoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirtDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
