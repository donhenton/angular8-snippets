import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { StandardDirectiveComponent, EventBindingButtonComponent } from './pages/directive-demos/directive-demos-page.component';
import { HomeComponent } from './pages/home/home-page.component';
import { DropdownDirective } from './components/dropdown/dropdown.directive';
import { MenuDirective } from './components/dropdown/menu.directive';
import { QueryRoutePageComponent } from './pages/routing/query-route-page/query-route-page.component';
import { SubRoutePageComponent } from './pages/routing/sub-route-page/sub-route-page.component';
import { LinkActivePageComponent } from './pages/routing/link-active-page/link-active-page.component';
import { MainChildComponent } from './pages/child-components/main-child/main-child.component';
import { AlphaChildComponent } from './pages/child-components/alpha-child/alpha-child.component';
import { BetaChildComponent } from './pages/child-components/beta-child/beta-child.component';
import { ChildPageComponent } from './pages/child-components/child-page/child-page.component';
import { PipePageComponent } from './pages/pipes/pipe-page/pipe-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncludePageComponent } from './pages/include-demo/include-page/include-page.component';
import { IncludeConsumerComponent } from './pages/include-demo/include-consumer/include-consumer.component';
import { CustomDirectivePageComponent } from './pages/custom-directives/custom-directive-page/custom-directive-page.component';
import { LoopCopyDirective } from './pages/custom-directives/loop-copy.directive';
import { DebuggingPageComponent } from './pages/debugging/debugging.component';
import { ViewChildComponent } from './pages/udemy/view-child/view-child.component';
import {  ServerElementComponent } from './pages/udemy/view-child/server-element.component';
import { CockpitComponent } from './pages/udemy/view-child/cockpit.component';
import { TemplateFormComponent } from './pages/udemy/template-form/template-form.component';
import { ReactiveFormComponent } from './pages/udemy/reactive-form/reactive-form.component';
import { SimpleReactiveComponent } from './pages/reactive-demos/simple-reactive/simple-reactive.component';
import { HttpModule } from '@angular/http';
import { BirtDemoComponent } from './pages/reactive-demos/birt-demo/birt-demo.component';
import { BirtService } from './pages/reactive-demos/support/birtService';
import { TabDemoComponent } from './pages/tab-demo/tab-demo.component';
import { ResusableModule } from './modules/reusable/resusable.module';
import { ToolTipPageComponent } from './pages/tool-tip/tool-tip-page.component';


// https://juristr.com/blog/2017/07/ng2-dynamic-tab-component/

/**
 * see sec-maint application for an example of placing a common service into a module
 * https://medium.com/@cyrilletuzi/understanding-angular-modules-ngmodule-and-their-scopes-81e4ed6f7407
 */

const appRoutes: Routes = [
  { path: 'pipes', component: PipePageComponent },
  { path: 'tabDemo', component: TabDemoComponent },
  { path: 'includes', component: IncludePageComponent },
  { path: 'directives', component: StandardDirectiveComponent },
  { path: 'debugging', component: DebuggingPageComponent },
  { path: 'simpleReactive', component: SimpleReactiveComponent },
  { path: 'birtDemo', component: BirtDemoComponent , resolve: {officeList: BirtService }}, // pre-fetch data via resolve
  { path: 'udemy/viewChild', component: ViewChildComponent },
  { path: 'udemy/templateForm', component: TemplateFormComponent },
  { path: 'udemy/reactiveForm', component: ReactiveFormComponent },
  { path: 'custom/directives', component: CustomDirectivePageComponent },
  { path: 'custom/tool-tips', component: ToolTipPageComponent },
  { path: 'routing/linkActive', component: LinkActivePageComponent },
  { path: 'routing/linkActive/queryRoute', component: QueryRoutePageComponent },
  { path: 'routing/linkActive/queryRoute/:alpha/:beta', component: QueryRoutePageComponent },
  {
    path: 'childComponents', component: ChildPageComponent, children: [
      { path: 'main', component: MainChildComponent },
      { path: 'alpha', component: AlphaChildComponent },
      { path: 'beta', component: BetaChildComponent }
    ]
  },
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    StandardDirectiveComponent,
    EventBindingButtonComponent,
    HomeComponent,
    DropdownDirective,
    MenuDirective,
    QueryRoutePageComponent,
    SubRoutePageComponent,
    LinkActivePageComponent,
    MainChildComponent,
    AlphaChildComponent,
    BetaChildComponent,
    ChildPageComponent,
    PipePageComponent,
    IncludePageComponent,
    IncludeConsumerComponent,
    CustomDirectivePageComponent,
    LoopCopyDirective,
    DebuggingPageComponent,
    ViewChildComponent,
    ServerElementComponent,
    CockpitComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    SimpleReactiveComponent,
    TabDemoComponent,
    BirtDemoComponent,
    ToolTipPageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ResusableModule
  ],
  providers: [BirtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
