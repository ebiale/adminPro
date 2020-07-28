import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ComponentModule} from '../components/component.module';
import {PipesModule} from '../pipes/pipes.module';
import {SharedModule} from '../shared/shared.module';

import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Graph1Component} from './graph1/graph1.component';
import {ProgressComponent} from './progress/progress.component';
import {PagesComponent} from './pages.component';
import {PromisesComponent} from './promises/promises.component';
import {RxjsComponent} from './rxjs/rxjs.component';
import {ProfileComponent} from './profile/profile.component';
import {UsersComponent} from './administration/users/users.component';
import {DoctorsComponent} from './administration/doctors/doctors.component';
import {HospitalsComponent} from './administration/hospitals/hospitals.component';
import {DoctorComponent} from './administration/doctors/doctor.component';
import { GlobalSearchComponent } from './global-search/global-search.component';

@NgModule({
  declarations: [
    AccountSettingsComponent,
    DashboardComponent,
    DoctorsComponent,
    Graph1Component,
    HospitalsComponent,
    ProgressComponent,
    PagesComponent,
    ProfileComponent,
    PromisesComponent,
    RxjsComponent,
    UsersComponent,
    DoctorComponent,
    GlobalSearchComponent
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
    PipesModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule {}
