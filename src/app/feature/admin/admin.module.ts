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
import {AddUserComponent} from './user-management/add-user/add-user.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    TableComponent,
    ShowUserComponent,
    UpdateUserComponent,
    UpdateMeetingComponent,
    ShowMeetingComponent,
    AddUserComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    DataTablesModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    SharedModule,

  ]
})
export class AdminModule {
}
