import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule,AppRoutingModule,HttpClientModule,],
  providers: [{provide: LOCALE_ID, useValue: 'en-US' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
