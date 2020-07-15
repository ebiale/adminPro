import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ComponentModule} from '../components/component.module';
import {SharedModule} from '../shared/shared.module';

import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Graph1Component} from './graph1/graph1.component';
import {ProgressComponent} from './progress/progress.component';
import {PagesComponent} from './pages.component';

@NgModule({
  declarations: [
    AccountSettingsComponent,
    DashboardComponent,
    Graph1Component,
    ProgressComponent,
    PagesComponent
  ],
  exports: [
    AccountSettingsComponent,
    DashboardComponent,
    Graph1Component,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule {}
