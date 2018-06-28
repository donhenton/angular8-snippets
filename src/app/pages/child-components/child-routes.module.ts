import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChildPageComponent } from './child-page/child-page.component';
import { MainChildComponent } from './main-child/main-child.component';
import { AlphaChildComponent } from './alpha-child/alpha-child.component';
import { BetaChildComponent } from './beta-child/beta-child.component';

const childRoutes: Routes = [
{
    path: 'childComponents', component: ChildPageComponent, children: [
      { path: 'main', component: MainChildComponent },
      { path: 'alpha', component: AlphaChildComponent },
      { path: 'beta', component: BetaChildComponent }
    ]
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(childRoutes)
    ],
    declarations: [
      MainChildComponent,
      ChildPageComponent,
      AlphaChildComponent,
      BetaChildComponent

    ]
  })
  export class ChildRoutesModule { }
