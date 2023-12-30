import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MainComponent} from "./main/main.component";
import {TableComponent} from "./table/table.component";
import {ShowUserComponent} from "./user-management/show-user/show-user.component";
import {UpdateUserComponent} from "./user-management/update-user/update-user.component";
import {ShowMeetingComponent} from "./meeting-management/show-meeting/show-meeting.component";
import {UpdateMeetingComponent} from "./meeting-management/update-meeting/update-meeting.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: 'main', component: MainComponent},
      {path: 'table', component: TableComponent},
      {path: 'show-user', component: ShowUserComponent},
      {path: 'update-user/:id', component: UpdateUserComponent},
      {path: 'show-meeting', component: ShowMeetingComponent},
      {path: 'update-meeting/:id', component: UpdateMeetingComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
