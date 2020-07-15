import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {DashboardComponent} from './dashboard/dashboard.component';
import {Graph1Component} from './graph1/graph1.component';
import {ProgressComponent} from './progress/progress.component';
import {PagesComponent} from './pages.component';

import {PAGES_ROUTES} from './pages.routes';
import {IncComponent} from '../components/inc/inc.component';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {GraphComponent} from '../components/graph/graph.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    Graph1Component,
    PagesComponent,
    ProgressComponent,
    IncComponent,
    GraphComponent,
    AccountSettingsComponent
  ],
  exports: [
    DashboardComponent,
    Graph1Component,
    PagesComponent,
    ProgressComponent
  ],
  imports: [
    ChartsModule,
    SharedModule,
    FormsModule,
    PAGES_ROUTES
  ]
})
export class PagesModule {}
