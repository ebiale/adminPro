import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {NopagefoundComponent} from './pages/nopagefound/nopagefound.component';
import {RegisterComponent} from './auth/register/register.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
