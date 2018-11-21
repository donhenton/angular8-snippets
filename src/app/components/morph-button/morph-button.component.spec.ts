import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorphButtonComponent } from './morph-button.component';

describe('MorphButtonComponent', () => {
  let component: MorphButtonComponent;
  let fixture: ComponentFixture<MorphButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorphButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorphButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
