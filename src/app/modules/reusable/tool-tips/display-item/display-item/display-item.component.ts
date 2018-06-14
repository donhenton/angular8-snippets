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
  tooltipOffset = 7;
  styleLeft = '';
  styleTop = '';


  doDisplay = false;

  // @ViewChild('myIdentifier')
  // myIdentifier: ElementRef;

  constructor(private elementRef: ElementRef, private _sanitizer: DomSanitizer) { }

  ngOnInit() {

  }

  getStyle(type) {
    if (!this.doDisplay) {
      return '-550px'

    }

    // console.log('1')
    if (type === 'top') {
      return this.styleTop;
    }
    return this.styleLeft;

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
      tTop = (elementPosition.top + scrollY) - (tooltipHeight + this.tooltipOffset);

    }

    if (placement === 'bottom') {
      tTop = (elementPosition.top + scrollY) + directiveHeight + this.tooltipOffset;
    }

    if (placement === 'top' || placement === 'bottom') {
      tLeft = (elementPosition.left + directiveWidth / 2) - tooltipWidth / 2;
    }

    if (placement === 'left') {
      tLeft = elementPosition.left - tooltipWidth - this.tooltipOffset;
    }

    if (placement === 'right') {
      tLeft = elementPosition.left + directiveWidth + this.tooltipOffset;
    }

    if (placement === 'left' || placement === 'right') {
      tTop = (elementPosition.top + scrollY) + directiveHeight / 2 - tooltip.clientHeight / 2;
    }

    this.styleLeft = tLeft + 'px';
    this.styleTop = tTop + 'px';
    // console.log(` style top ${ this.styleTop} left ${ this.styleLeft}`)
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
    const css = 'tooltip-item';
    // if (!this.doDisplay)  {
    //   css = css + ' dont-show';
    // }

    return css;

  }

}
