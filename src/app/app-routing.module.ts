import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// modules
import {PagesRoutingModule} from './pages/pages-routing.module';


import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {Graph1Component} from './pages/graph1/graph1.component';
import {LoginComponent} from './auth/login/login.component';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';
import {PagesComponent} from './pages/pages.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {RegisterComponent} from './auth/register/register.component';
import {AuthRoutingModule} from './auth/auth-routing.module';

const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
