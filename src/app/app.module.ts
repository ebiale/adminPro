import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// modules
import {PagesModule} from './pages/pages.module';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';

// components
import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PagesModule,
    FormsModule,
    SharedModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
