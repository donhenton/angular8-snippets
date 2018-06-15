import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolTipPageComponent } from './tool-tip-page.component';
import { ResusableModule } from '../../modules/reusable/resusable.module';

describe('ToolTipComponent', () => {
  let component: ToolTipPageComponent;
  let fixture: ComponentFixture<ToolTipPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ResusableModule],
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
