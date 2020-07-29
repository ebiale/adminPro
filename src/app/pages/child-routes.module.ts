import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {AdminGuard} from '../guards/admin.guard';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DoctorComponent} from './administration/doctors/doctor.component';
import {DoctorsComponent} from './administration/doctors/doctors.component';
import {GlobalSearchComponent} from './global-search/global-search.component';
import {Graph1Component} from './graph1/graph1.component';
import {HospitalsComponent} from './administration/hospitals/hospitals.component';
import {ProfileComponent} from './profile/profile.component';
import {ProgressComponent} from './progress/progress.component';
import {PromisesComponent} from './promises/promises.component';
import {RxjsComponent} from './rxjs/rxjs.component';
import {UsersComponent} from './administration/users/users.component';

const childRoutes: Routes = [
  {path: '', component: DashboardComponent, data: {title: 'Dashboard'}},
  {path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'}},
  {path: 'chart', component: Graph1Component, data: {title: 'Chart'}},
  {path: 'global-search/:search', component: GlobalSearchComponent, data: {title: 'Global Search'}},
  {path: 'profile', component: ProfileComponent, data: {title: 'My Profile'}},
  {path: 'progress', component: ProgressComponent, data: {title: 'Progress Bar'}},
  {path: 'promises', component: PromisesComponent, data: {title: 'Promises'}},
  {path: 'rxjs', component: RxjsComponent, data: {title: 'RxJs'}},


  // admin
  {path: 'doctors', component: DoctorsComponent, data: {title: 'Doctors'}},
  {path: 'doctors/:id', component: DoctorComponent, data: {title: 'Doctor'}},
  {path: 'hospitals', component: HospitalsComponent, data: {title: 'Hospitals'}},
  {path: 'users', canActivate: [AdminGuard], component: UsersComponent, data: {title: 'Users'}},
];

@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule {
}
