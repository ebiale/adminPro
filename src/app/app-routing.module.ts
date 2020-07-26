import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// modules
import {PagesRoutingModule} from './pages/pages-routing.module';
import {AuthRoutingModule} from './auth/auth-routing.module';
// components
import {NopagefoundComponent} from './nopagefound/nopagefound.component';

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
