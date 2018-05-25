import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debugging',
  templateUrl: './debugging.component.html',
  styleUrls: ['./debugging.component.scss']
})
export class DebuggingPageComponent implements OnInit {

  public debuggingText: string;
  constructor() {
    const debugInfo = {
      'version': '0.2.0',
        'configurations': [
          {
            'type': 'chrome',
            'request': 'launch',
            'name': 'Launch Chrome against localhost',
            'url': 'http://localhost:4200',
            'sourceMaps': true,
            'trace': true,
            'webRoot': '${workspaceRoot}/src',
            'userDataDir': '${workspaceRoot}/.vscode/chrome',
            'sourceMapPathOverrides': {
              'webpack:///C:*': 'C:/*'
            }
          }
        ]
  };



    this.debuggingText = JSON.stringify(debugInfo, null, '\t');

  }

ngOnInit() {
}

}
