import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PagesModule} from './pages/pages.module';

import {APP_ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    APP_ROUTES,
    BrowserModule,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
