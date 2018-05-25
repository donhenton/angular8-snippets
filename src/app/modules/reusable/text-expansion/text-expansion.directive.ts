/**
 * This is a directive that will expand a piece of text that is greater than a set limit.
 * Splitting is done on word boundaries
 * Expansion link only shows for text > length
 *
 * USAGE:
 *
 *  <div appTextExpansion (onExpand)="onExpandHandler($event)"
 *    linkCssClass="expand-link-display"
 *    textCssClass="text-highlight" length="25"> long text goes here
    </div>
 *
 * Attributes:
 *    linkCssClass: css class on the more/less link defaults to 'expand-link'
 *    textCssClass: css class on the expanded/contracted text block defaults to 'expand-text'
 *    length: the mininum length of text to cut the text off at defaults to 20
 *
 * Events:
 *    onExpand announces isExpanded true/false eg {isExpanded: true}
 *
 */


import {
  AfterContentInit,
  AfterViewInit,
  ContentChildren,
  Directive,
  QueryList,
  Renderer2,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  ElementRef,
  Host,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appTextExpansion]'
})
export class TextExpansionDirective implements AfterContentInit, AfterViewInit, OnInit, OnDestroy {

  @Input() length = 20;
  @Input() textCssClass = 'expand-text';
  @Input() linkCssClass = 'expand-link';
  @Output() onExpand = new EventEmitter();

  private innerText = null;
  private expandLink: HTMLLinkElement = null;
  private isExpanded = false;
  private textContentNode: HTMLSpanElement = null;
  private linkTextNode: Text = null;
  private originalText: string = null;
  private splitText: string = null;
  private removeListener = null;
  private isOverLength = false;


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }

  doExpand(ev: Event) {
    ev.preventDefault();
    this.isExpanded = !this.isExpanded;
    this.linkTextNode.textContent = this.getLinkText();
    this.getDisplayText();
    this.onExpand.emit({ isExpanded: this.isExpanded });

  }
  getLinkText() {
    let linkText = ' more';
    if (this.isExpanded) {
      linkText = ' less';
    }
    return linkText;
  }

  getDisplayText() {
    let overage = '';
    if (this.isOverLength === true) {
      overage = '...';
    }

    if (this.isExpanded) {
      this.textContentNode.textContent = this.originalText;
    } else {
      this.textContentNode.textContent = this.splitText + overage;
    }

  }

  computeSplitText(text) {

    text = text.trim();
    let splitText = '';
    const words = text.split(/\s+/);
    let currentCount = 0;

    words.every(element => {
      element = element.trim();
      currentCount = currentCount + element.length;
      if (currentCount <= this.length) {
        splitText = splitText + ' ' + element;
        return true;
      } else {
        return false;
      }

    });
    return splitText;


  }

  ngAfterContentInit() {

    const oldContentNode = this.el.nativeElement.firstChild;
    this.originalText = oldContentNode.data;
    this.splitText = this.computeSplitText(this.originalText);

    this.textContentNode = this.renderer.createElement('span');
    this.renderer.addClass(this.textContentNode, this.textCssClass);
    const newTextNode = this.renderer.createText(this.originalText);
    this.renderer.appendChild(this.textContentNode, newTextNode);
    this.renderer.appendChild(this.el.nativeElement, this.textContentNode);
    this.renderer.removeChild(this.el.nativeElement, oldContentNode);

    if (this.splitText.length > this.length) {
      this.expandLink = this.renderer.createElement('a');
      this.renderer.addClass(this.expandLink, this.linkCssClass);
      this.linkTextNode = this.renderer.createText(this.getLinkText());
      this.renderer.appendChild(this.expandLink, this.linkTextNode);
      this.expandLink.setAttribute('href', '#');
      this.renderer.appendChild(this.el.nativeElement, this.expandLink);
      this.isOverLength = true;
    }


    this.getDisplayText();

  }

  ngAfterViewInit() {
    const me = this;
    if (me.expandLink) {
      this.removeListener = this.renderer.listen(me.expandLink, 'click', me.doExpand.bind(me))
    }
  }

  ngOnDestroy() {
    if (this.removeListener) {
      this.removeListener();
    }

  }

}
