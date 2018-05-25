import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashtagCleanPipe } from './pipes/hashtag-clean.pipe';
import {TabComponent} from './tab-system/tab/tab.component';
import {TabsComponent} from './tab-system/tabs/tabs.component';
import { TextExpansionDirective } from './text-expansion/text-expansion.directive';


// https://medium.com/@cyrilletuzi/understanding-angular-modules-ngmodule-and-their-scopes-81e4ed6f7407

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HashtagCleanPipe, TabsComponent, TabComponent, TextExpansionDirective],
  exports: [HashtagCleanPipe, TabsComponent, TabComponent, TextExpansionDirective]
})
export class ResusableModule { }
