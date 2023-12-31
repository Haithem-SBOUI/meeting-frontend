import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Test1Component} from './shared/test1/test1.component';
import {Test2Component} from './shared/test2/test2.component';
import {UserModule} from "./feature/user/user.module";
import {AdminModule} from "./feature/admin/admin.module";
import {DataTablesModule} from "angular-datatables";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { TruncatePipe } from './shared/pipe/truncate.pipe';
import { FormatDateTimePipe } from './shared/pipe/format-date-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    BrowserModule,
    DataTablesModule,
    BrowserAnimationsModule,



  ],
  providers: [],
  exports: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
