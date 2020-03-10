import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AliComponent } from './ali/ali.component';
import { YousefComponent } from './yousef.component';

@NgModule({
  declarations: [
    AppComponent,
    AliComponent,
    YousefComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
