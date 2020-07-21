import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ComponentModule} from '../components/component.module';
import {SharedModule} from '../shared/shared.module';

import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Graph1Component} from './graph1/graph1.component';
import {ProgressComponent} from './progress/progress.component';
import {PagesComponent} from './pages.component';
import {PromisesComponent} from './promises/promises.component';
import {RxjsComponent} from './rxjs/rxjs.component';
import {ProfileComponent} from './profile/profile.component';

@NgModule({
  declarations: [
    AccountSettingsComponent,
    DashboardComponent,
    Graph1Component,
    ProgressComponent,
    PagesComponent,
    PromisesComponent,
    RxjsComponent,
    ProfileComponent
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
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PagesModule {}
