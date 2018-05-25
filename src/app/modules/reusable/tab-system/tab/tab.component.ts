import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div [hidden]="!active" class="tab-content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input( ) tabTitle: string;
  @Input() active = false;
  constructor() { }

  ngOnInit() {
  }

}



