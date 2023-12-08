import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {RegisterComponent} from "./register/register.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {AllMeetingComponent} from "./all-meeting/all-meeting.component";
import {MeetingDetailsComponent} from "./meeting-details/meeting-details.component";
import {CreateMeetingComponent} from "./create-meeting/create-meeting.component";
import {MeetingRoomComponent} from "./meeting-room/meeting-room.component";

const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "welcome", component: WelcomeComponent},
  { path: "all-meeting", component: AllMeetingComponent},
  { path: "meeting-details", component: MeetingDetailsComponent},
  { path: "create-meeting", component: CreateMeetingComponent},
  { path: "meeting-room", component: MeetingRoomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
