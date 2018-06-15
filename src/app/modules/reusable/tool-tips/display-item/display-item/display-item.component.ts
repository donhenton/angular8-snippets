import { Component, OnInit, Input, HostBinding, ElementRef, AfterViewInit, ViewChild, AfterContentChecked } from '@angular/core';
import { ToolTipsDirective } from '../../tool-tips.directive';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.scss']
})
export class DisplayItemComponent implements OnInit {

  _options = {};
  _displayText = 'initial';
  _directiveRef: ToolTipsDirective;
  _offset = 15;
  styleLeft = '';
  styleTop = '';
  triangleTransform = `translate(5,5) rotate(45)`;


  doDisplay = false;


  constructor(private elementRef: ElementRef, private _sanitizer: DomSanitizer) { }

  ngOnInit() {

  }

  getStyle(type) {
    if (!this.doDisplay) {
      return '-1550px'

    }

    if (type === 'top') {
      return this.styleTop;
    }
    return this.styleLeft;

  }

  set offset(v: number) {
    if (v) {
      this._offset = v;
    }
  }
  get offset() {

    return this._offset;
  }

  setPosition(): void {

    const directEv = this._directiveRef.getElementRef().nativeElement;
    const directiveRect = directEv.getBoundingClientRect();
    const directiveHeight = directiveRect.height;
    const directiveWidth = directiveRect.width;
    const directiveTop = directEv.offsetTop;
    const directiveLeft = directEv.offsetLeft;


    const scrollY = window.pageYOffset;
    const tooltip = this.elementRef.nativeElement;
    const tooltipHeight = tooltip.firstElementChild.clientHeight;
    const tooltipWidth = tooltip.firstElementChild.clientWidth;


    const placement = this.options['placement'];
    const elementPosition = { top: directiveTop, left: directiveLeft }
    let tLeft = 0;
    let tTop = 0;


    if (placement === 'top') {
      tTop = (elementPosition.top + scrollY) - (tooltipHeight + this.offset);

    }

    if (placement === 'bottom') {
      tTop = (elementPosition.top + scrollY) + directiveHeight + this.offset;
    }

    if (placement === 'top' || placement === 'bottom') {
      tLeft = (elementPosition.left + directiveWidth / 2) - tooltipWidth / 2;
    }

    if (placement === 'left') {
      tLeft = elementPosition.left - tooltipWidth - this.offset;
    }

    if (placement === 'right') {
      tLeft = elementPosition.left + directiveWidth + this.offset;
    }

    if (placement === 'left' || placement === 'right') {
      tTop = (elementPosition.top + scrollY) + directiveHeight / 2 - tooltipHeight / 2;
    }

    this.styleLeft = tLeft + 'px';
    this.styleTop = tTop + 'px';
    this.computeTriangleTransform(tTop, tLeft, placement, tooltipWidth, tooltipHeight);

  }


  set directiveRef(v: ToolTipsDirective) {
    this._directiveRef = v;

  }

  set displayText(v: any) {
    this._displayText = v;

  }
  get displayText() {
    return this._displayText;

  }

  set options(v: any) {
    this._options = v;

  }
  get options() {
    return this._options;

  }

  showToolTip() {

    this.doDisplay = true;
    this.setPosition();
  }

  hideToolTip() {
    this.doDisplay = false;
  }

  computeClass() {
    const custom = this.options['customClass'];
    let css = 'tooltip-item';
    if (custom) {
      css = css + ' ' + custom;
    }

    return css;

  }

  /**
   *
   * @param top where the box is placed
   * @param left where the box is placed
   * @param placement top, left, right, bottom
   * @param tooltipWidth box width
   * @param tooltipHeight box height
   *
   * will compute the svg transform ih the form
   */
  private computeTriangleTransform(top, left, placement, tooltipWidth, tooltipHeight) {

  }

  reportTriangleTransform() {

    return this.triangleTransform;
  }

  computeTriangleClass() {
    const css = 'tooltip-item-triangle';
    if (!this.doDisplay) {
     // css = css + ' hidden' ;
    }

    return css;

  }

}
