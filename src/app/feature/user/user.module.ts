import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllMeetingComponent } from './all-meeting/all-meeting.component';
import { MeetingDetailsComponent } from './meeting-details/meeting-details.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { MeetingRoomComponent } from './meeting-room/meeting-room.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    WelcomeComponent,
    NavbarComponent,
    AllMeetingComponent,
    MeetingDetailsComponent,
    CreateMeetingComponent,
    MeetingRoomComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
