import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {AllMeetingComponent} from "./all-meeting/all-meeting.component";
import {MeetingDetailsComponent} from "./meeting-details/meeting-details.component";
import {CreateMeetingComponent} from "./create-meeting/create-meeting.component";
import {MeetingRoomComponent} from "./meeting-room/meeting-room.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: "welcome", component: WelcomeComponent},
  {path: "navbar", component: NavbarComponent},
  {path: "all-meeting", component: AllMeetingComponent},
  {path: "meeting-details/:roomId", component: MeetingDetailsComponent},
  {path: "create-meeting", component: CreateMeetingComponent},
  {path: "meeting-room/:roomId", component: MeetingRoomComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
