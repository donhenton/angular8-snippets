import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[loopCopy]'
})
export class LoopCopyDirective {


  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  /**
   * the set version of input is used here as it will be called
   * each time the input is changed
   */

  @Input('loopCopy') set loop(num: number) {
    this.viewContainer.clear();
    for (let i = 0; i < num; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
