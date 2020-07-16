import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graph1Component} from './graph1/graph1.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {PromisesComponent} from './promises/promises.component';
import {RxjsComponent} from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children:
      [
        {path: '', component: DashboardComponent, data: {title: 'Dashboard'}},
        {path: 'progress', component: ProgressComponent, data: {title: 'Progress Bar'}},
        {path: 'chart', component: Graph1Component, data: {title: 'Chart'}},
        {path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'}},
        {path: 'promises', component: PromisesComponent, data: {title: 'Promises'}},
        {path: 'rxjs', component: RxjsComponent, data: {title: 'RxJs'}},
      ]
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
