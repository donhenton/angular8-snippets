import { Component, OnInit, Input, HostBinding, ElementRef, AfterViewInit, ViewChild, AfterContentChecked } from '@angular/core';
import { ToolTipsDirective } from '../../tool-tips.directive';
import { DomSanitizer } from '@angular/platform-browser';

const TRIANGLE_WIDTH = 16;

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.scss']
})
export class DisplayItemComponent implements OnInit {

  _options = {};
  _displayText = 'initial';
  _directiveRef: ToolTipsDirective;
  _offset = 20;
  styleLeftNumber = 0;
  styleTopNumber = 0;
  triangleLeftNumber = 0;
  triangleTopNumber = 0;
  polygonPoints = ''
  _useTriangle = true;

  svgSize = { width: 2 * TRIANGLE_WIDTH, height: 2 * TRIANGLE_WIDTH }
  triangleTransform = '';


  doDisplay = false;


  constructor(private elementRef: ElementRef, private _sanitizer: DomSanitizer) {

    this.polygonPoints = `0,0 ${TRIANGLE_WIDTH},0  ${TRIANGLE_WIDTH / 2},${TRIANGLE_WIDTH}`

  }

  ngOnInit() {

  }

  getStyle(type) {

    if (!this.doDisplay  ) {
      return '-1550px'

    }

    if (type === 'top') {
      return this.styleTopNumber + 'px';
    }
    return this.styleLeftNumber + 'px';

  }

  getTriangleStyle(type) {

    if (!this.doDisplay || !this.useTriangle) {
      return '-1550px'
    }

    if (type === 'top') {

      return (this.styleTopNumber + this.triangleTopNumber) + 'px';

    }
    return (this.styleLeftNumber + this.triangleLeftNumber) + 'px';


  }



  get useTriangle() {
    return this._options['useTriangle'];
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
    const tooltipHeight = tooltip.lastElementChild.clientHeight;
    const tooltipWidth = tooltip.lastElementChild.clientWidth;


    const placement = this.options['placement'];
    const elementPosition = { top: directiveTop, left: directiveLeft }
    let tLeft = 0;
    let tTop = 0;



    if (placement === 'top') {
      tTop = (elementPosition.top + scrollY) - (tooltipHeight + this.offset);
      this.triangleTopNumber = (tooltipHeight - TRIANGLE_WIDTH)
      this.triangleLeftNumber = tooltipWidth / 2 - TRIANGLE_WIDTH
    }

    if (placement === 'bottom') {
      tTop = (elementPosition.top + scrollY) + directiveHeight + this.offset;
      //  this.triangleTopNumber = (- tooltipHeight + TRIANGLE_WIDTH / 2) - 8;
      this.triangleTopNumber = - tooltipHeight + TRIANGLE_WIDTH / 4;
      this.triangleLeftNumber = tooltipWidth / 2 - TRIANGLE_WIDTH
    }

    if (placement === 'top' || placement === 'bottom') {
      tLeft = (elementPosition.left + directiveWidth / 2) - tooltipWidth / 2;

    }

    if (placement === 'left') {
      tLeft = elementPosition.left - tooltipWidth - this.offset;
      this.triangleTopNumber = tooltipHeight / 2 - TRIANGLE_WIDTH
      this.triangleLeftNumber = tooltipWidth - TRIANGLE_WIDTH;
    }

    if (placement === 'right') {
      tLeft = elementPosition.left + directiveWidth + this.offset;
      this.triangleLeftNumber = - TRIANGLE_WIDTH;
      this.triangleTopNumber = tooltipHeight / 2 - TRIANGLE_WIDTH



    }

    if (placement === 'left' || placement === 'right') {
      tTop = (elementPosition.top + scrollY) + directiveHeight / 2 - tooltipHeight / 2;

    }

    this.styleLeftNumber = tLeft;
    this.styleTopNumber = tTop;


    this.computeTriangleTransform(placement);

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
   * @param placement top, left, right, bottom

   *
   * will compute the svg rotate   triangleTransform = `translate(5,5) rotate(45)`;
*/
  private computeTriangleTransform(placement) {
    let rot = 0;
    let xpos = this.svgSize.width / 2;
    let ypos = this.svgSize.height / 2;
    const dispY = this.svgSize.height / 2;
    const dispX = this.svgSize.width / 2

    // this.triangleTransform = `translate(${this.svgSize.width / 2},${this.svgSize.height / 2}) ` +

    switch (placement) {
      case 'top':
        xpos = xpos - dispX / 2;
        rot = 0;
        break;
      case 'bottom':
        xpos = xpos + (this.svgSize.width - TRIANGLE_WIDTH) / 2
        ypos = ypos + dispY / 2;
        rot = 180;
        break;
      case 'left':
        ypos = ypos + dispY / 2;
        rot = -90;
        break;
      case 'right':
        ypos = ypos - dispY / 2;
        rot = 90;
        break;

    }
    // xpos = 0;
    // ypos = 0;

    this.triangleTransform = `translate(${xpos},${ypos}) rotate(${rot}) `;
  }

  //
  reportTriangleTransform() {

    return this.triangleTransform;
  }

  computeTriangleClass() {
    let css = 'tooltip-item-triangle';
    const custom = this.options['customClass'];

    if (custom) {
      css = css + ' ' + custom;
    }

    return css;
  }

}
