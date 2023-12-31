import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {MainComponent} from './main/main.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TableComponent} from './table/table.component';
import {DataTablesModule} from "angular-datatables";
import {ShowUserComponent} from './user-management/show-user/show-user.component';
import {UpdateUserComponent} from './user-management/update-user/update-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {UpdateMeetingComponent} from './meeting-management/update-meeting/update-meeting.component';
import {ShowMeetingComponent} from './meeting-management/show-meeting/show-meeting.component';
import {TruncatePipe} from "../../shared/pipe/truncate.pipe";
import {FormatDateTimePipe} from "../../shared/pipe/format-date-time.pipe";
import { AddUserComponent } from './user-management/add-user/add-user.component';


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    TableComponent,
    ShowUserComponent,
    UpdateUserComponent,
    UpdateMeetingComponent,
    ShowMeetingComponent,
    TruncatePipe,
    FormatDateTimePipe,
    AddUserComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    DataTablesModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

  ]
})
export class AdminModule {
}
