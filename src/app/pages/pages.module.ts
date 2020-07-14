import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {DashboardComponent} from './dashboard/dashboard.component';
import {Graph1Component} from './graph1/graph1.component';
import {ProgressComponent} from './progress/progress.component';
import {PagesComponent} from './pages.component';

import {PAGES_ROUTES} from './pages.routes';

@NgModule({
  declarations: [
    DashboardComponent,
    Graph1Component,
    PagesComponent,
    ProgressComponent
  ],
  exports: [
    DashboardComponent,
    Graph1Component,
    PagesComponent,
    ProgressComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule {}
