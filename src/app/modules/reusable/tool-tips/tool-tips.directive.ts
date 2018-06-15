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

  @Input('offset') set offset(value: string) {
    if (value) {
      this._options['offset'] = value;
    }
  }

  @Input() set useTriangle(v: boolean) {
    console.log(`1 ${v}`)
    if (v) {
      this._options['useTriangle'] = v;
    }
  }

  get useTriangle() {
    return this._options['useTriangle'];
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

  }

  @HostListener('focusout')
  @HostListener('mouseleave')
  onMouseLeave() {

    this.displayRef.instance.hideToolTip();
  }

  @HostListener('click', ['$event'])
  onClick(ev) {

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
    let offVar =  null;
    try {
      offVar =  parseInt(this._options['offset'], 10);
    } catch (e) {}
    if (offVar) {
      this.displayRef.instance.offset = offVar;
    }

    this.displayRef.instance.setPosition();



  }





}
