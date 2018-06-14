import {
  Directive, ElementRef,
  ComponentFactoryResolver, ApplicationRef, Injector,
  HostListener, Input, EmbeddedViewRef, AfterContentInit
} from '@angular/core';
import { DisplayItemComponent } from './display-item/display-item/display-item.component';


export interface ToolTipItem {
  data: any;
  show: boolean;
  close: boolean;
  events: any;
}



@Directive({
  selector: '[appToolTip]'
})
export class ToolTipsDirective implements AfterContentInit {




  _options = {};
  displayRef: any
  firstTime = false;
  _toolTipValue = '';


  constructor(private elementRef: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
  }


  ngAfterContentInit(): void {
    if (this.firstTime === false) {
      this.firstTime = true;
      window.setTimeout(() => {
        this.appendItemComponentToBody();
      }, 10);

    }
  }

  @Input('customClass') set customClass(value: string) {
    if (value) {
      this._options['customClass'] = value;
    }
  }

  @Input('placement') set placement(value: string) {
    if (value) {
      this._options['placement'] = value;
    }
  }

  /* tslint:disable:no-input-rename */
  @Input('appToolTip') set toolTipValue(value: string) {
    this._toolTipValue = value;
  }
  /* tslint:enable */

  get toolTipValue() {
    return this._toolTipValue;
  }

  getElementRef() {
    return this.elementRef;
  }


  @HostListener('focusin')
  @HostListener('mouseenter')
  onMouseEnter() {


    this.displayRef.instance.showToolTip();
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
    // console.log('mouse leave');
    this.displayRef.instance.hideToolTip();
  }

  @HostListener('click', ['$event'])
  onClick(ev) {
    // console.log(`click ${ev.target}`)
  }



  appendItemComponentToBody(): void {

    this.displayRef = this.componentFactoryResolver
      .resolveComponentFactory(DisplayItemComponent)
      .create(this.injector);

    this.appRef.attachView(this.displayRef.hostView);
    const domElem = (this.displayRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.displayRef.instance.options = this._options;
    this.displayRef.instance.displayText = this._toolTipValue;
    this.displayRef.instance.directiveRef = this;
    this.displayRef.instance.setPosition();

    // console.log(this.displayRef.instance.elementRef.nativeElement.getBoundingClientRect());

    // ngAfterContentChecked() {
    //   console.log(this.elementRef.nativeElement.getBoundingClientRect());





  }





}
