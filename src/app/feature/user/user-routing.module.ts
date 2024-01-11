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
import {AccountDetailsComponent} from "./settings/account-details/account-details.component";
import {SecurityComponent} from "./settings/security/security.component";
import {ProfileComponent} from "./profile/profile.component";
import {MeetingTimelineComponent} from "./meeting-timeline/meeting-timeline.component";
import {JoinWithRoomIdComponent} from "./join-with-room-id/join-with-room-id.component";

const routes: Routes = [
  {path: "welcome", component: WelcomeComponent},
  {path: "navbar", component: NavbarComponent},
  {path: "all-meeting", component: AllMeetingComponent},
  {path: "meeting-details/:roomId", component: MeetingDetailsComponent},
  {path: "create-meeting", component: CreateMeetingComponent},
  {path: "join-with-roomId", component: JoinWithRoomIdComponent},
  {path: "meeting-room/:roomId", component: MeetingRoomComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "settings/account-details", component: AccountDetailsComponent},
  {path: "settings/security", component: SecurityComponent},
  {path: "profile", component: ProfileComponent},
  {path: "timeline", component: MeetingTimelineComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
