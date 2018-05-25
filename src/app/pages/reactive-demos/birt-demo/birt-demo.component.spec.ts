import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirtDemoComponent } from './birt-demo.component';

describe('BirtDemoComponent', () => {
  let component: BirtDemoComponent;
  let fixture: ComponentFixture<BirtDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirtDemoComponent ]
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
