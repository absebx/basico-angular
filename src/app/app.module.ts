import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReposComponent } from './repos/repos.component';

import {ReposService} from './repos/repos.service';

@NgModule({
  declarations: [
    AppComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
