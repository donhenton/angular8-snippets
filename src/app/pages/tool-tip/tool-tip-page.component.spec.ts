import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolTipPageComponent } from './tool-tip-page.component';

describe('ToolTipComponent', () => {
  let component: ToolTipPageComponent;
  let fixture: ComponentFixture<ToolTipPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolTipPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolTipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
