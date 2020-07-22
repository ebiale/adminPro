import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RxjsComponent} from './rxjs/rxjs.component';

import {AuthGuard} from '../guards/auth.guard';

import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Graph1Component} from './graph1/graph1.component';
import {PagesComponent} from './pages.component';
import {ProfileComponent} from './profile/profile.component';
import {ProgressComponent} from './progress/progress.component';
import {PromisesComponent} from './promises/promises.component';
import {UsersComponent} from './administration/users/users.component';
import {DoctorsComponent} from './administration/doctors/doctors.component';
import {HospitalssComponent} from './administration/hospitalss/hospitalss.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children:
      [
        {path: '', component: DashboardComponent, data: {title: 'Dashboard'}},
        {path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'}},
        {path: 'chart', component: Graph1Component, data: {title: 'Chart'}},
        {path: 'profile', component: ProfileComponent, data: {title: 'My Profile'}},
        {path: 'progress', component: ProgressComponent, data: {title: 'Progress Bar'}},
        {path: 'promises', component: PromisesComponent, data: {title: 'Promises'}},
        {path: 'rxjs', component: RxjsComponent, data: {title: 'RxJs'}},


        // admin
        {path: 'doctors', component: DoctorsComponent, data: {title: 'Doctors'}},
        {path: 'hospitals', component: HospitalssComponent, data: {title: 'Hospitals'}},
        {path: 'users', component: UsersComponent, data: {title: 'Users'}},
      ]
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
