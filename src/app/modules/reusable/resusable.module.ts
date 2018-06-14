import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashtagCleanPipe } from './pipes/hashtag-clean.pipe';
import { TabComponent } from './tab-system/tab/tab.component';
import { TabsComponent } from './tab-system/tabs/tabs.component';
import { TextExpansionDirective } from './text-expansion/text-expansion.directive';
import { OnlyNumberDirective } from './only-number/only-number.directive';
import { ToolTipsDirective } from './tool-tips/tool-tips.directive';
import { DisplayItemComponent } from './tool-tips/display-item/display-item/display-item.component';
import { KeepHtmlPipe } from './keep-html/keep-html';


// https://medium.com/@cyrilletuzi/understanding-angular-modules-ngmodule-and-their-scopes-81e4ed6f7407

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HashtagCleanPipe, TabsComponent, ToolTipsDirective, KeepHtmlPipe,
    OnlyNumberDirective, TabComponent, TextExpansionDirective, DisplayItemComponent],
  exports: [HashtagCleanPipe, TabsComponent, ToolTipsDirective, KeepHtmlPipe,
    OnlyNumberDirective, TabComponent, TextExpansionDirective],
  entryComponents: [DisplayItemComponent]
})
export class ResusableModule { }
