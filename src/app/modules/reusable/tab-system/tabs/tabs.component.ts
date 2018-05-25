import { Component, ContentChildren, QueryList, AfterContentInit, OnInit } from '@angular/core';
import { TabComponent } from './../tab/tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <ul class="tabs tab-link-container">
      <li *ngFor="let tab of tabs" (click)="selectTab($event,tab)" class="tab-link" [class.tab-link-active]="tab.active">
        <a class="tab-link-selector" href="#">{{tab.tabTitle}}</a>
      </li>
    </ul>

    <ng-content></ng-content>

  `,
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {

  // QueryList is unmodifable list of items that angular keeps up to date
  // when state changes
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;


  constructor() { }

  ngOnInit() {

  }

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs called with each link click

    const activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(null, this.tabs.first);
    }
  }

  selectTab(ev, tab: TabComponent) {
    if (ev) {
      ev.preventDefault();
    }
    // deactivate all tabs
    this.tabs.toArray().forEach(tabItems => tabItems.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;

  }

}
