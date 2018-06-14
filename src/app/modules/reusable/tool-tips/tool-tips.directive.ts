import {
  Directive, ElementRef,
  ComponentFactoryResolver, ApplicationRef, Injector, HostListener, Input
} from '@angular/core';


export interface ToolTipItem {
  data: any;
  show: boolean;
  close: boolean;
  events: any;
}



@Directive({
  selector: '[appToolTip]'
})
export class ToolTipsDirective {

  _options = {};


  constructor(private elementRef: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
  }


  @Input('placement') set placement(value: string) {
    if (value) {
      this._options['placement'] = value;
    }
  }

    /* tslint:disable:no-input-rename */
    @Input('appToolTip') set toolTipValue(value: string) {
      this._options['toolTipValue'] = value;
    }
    /* tslint:enable */


  @HostListener('focusin')
  @HostListener('mouseenter')
  onMouseEnter() {
    // if (this.isDisplayOnHover === false) {
    //  return;
    // }
    // console.log(`${this._options['toolTipValue']} ${this._options['placement']}`)
    // this.show();
  }

  @HostListener('focusout')
  @HostListener('mouseleave')
  onMouseLeave() {
    // if (this.options['trigger'] === 'hover') {
    // this.destroyTooltip();
    // }
    console.log('mouse leave')
  }

  @HostListener('click', ['$event'])
  onClick() {
    // if (this.isDisplayOnClick === false) {
    // return;
    // }

    // this.show();

    // this.hideAfterClickTimeoutId = window.setTimeout(() => {
    //   this.destroyTooltip();
    // }, 0);
  }

}
