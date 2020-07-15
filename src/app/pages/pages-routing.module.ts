import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graph1Component} from './graph1/graph1.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children:
      [
        {path: '', component: DashboardComponent},
        {path: 'progress', component: ProgressComponent},
        {path: 'chart', component: Graph1Component},
        {path: 'account-settings', component: AccountSettingsComponent}
      ]
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
