import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {DashboardComponent} from './dashboard/dashboard.component';
import {Graph1Component} from './graph1/graph1.component';
import {ProgressComponent} from './progress/progress.component';
import {PagesComponent} from './pages.component';

import {IncComponent} from '../components/inc/inc.component';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {GraphComponent} from '../components/graph/graph.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AccountSettingsComponent,
    DashboardComponent,
    GraphComponent,
    Graph1Component,
    IncComponent,
    ProgressComponent,
    PagesComponent
  ],
  exports: [
    AccountSettingsComponent,
    DashboardComponent,
    GraphComponent,
    Graph1Component,
    IncComponent,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    ChartsModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule {}
