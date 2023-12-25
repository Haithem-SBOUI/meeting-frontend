import {Component, OnInit, signal} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/service/auth.service";
import {MeetingService} from "../../../core/service/meeting.service";
import {CreatedMeet} from "../../../model/CreatedMeet.model";

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent implements OnInit {
  creatMeetingForm!: FormGroup;
  searchUserForm!: FormGroup;
  connectedUser: any;
  createdMeeting!: CreatedMeet;
  showBtnOptions: boolean = false;


  constructor(private fb: FormBuilder, private authService: AuthService, private meetingService: MeetingService, private router: Router) {
  }

  ngOnInit() {
    this.creatMeetingForm = this.fb.group({
      organizer_id: this.authService.getUserDetails("id"),
      title: ['', Validators.required],
      description: ['', Validators.required],
      dateTime: ['', Validators.required],
      maxAttendees: ['', Validators.required],
      status: ['NOT_STARTED']
    })


    this.searchUserForm = this.fb.group({
      email: ''
    })

  }

  createMeeting() {
    this.meetingService.createMeeting(this.creatMeetingForm.value).subscribe(
      async (response: any) => {
        if (response) {
          this.createdMeeting = response;
          console.log("this.creatMeetingForm.value : ", this.creatMeetingForm.value)
          console.log("meeting created successfully \n response : ", response);
          console.log("meeting created successfully \n this.createdMeeting : ", this.createdMeeting);
          this.showBtnOptions = true;
        }
      }, error => {
        console.log("failed meeting creation : ", error);
        console.log("this.creatMeetingForm.value : ", this.creatMeetingForm.value);
      }
    )
  }

  redirectToDetails(){
     this.router.navigate(['/meeting-details', this.createdMeeting.roomId]);
  };

  redirectToRoom(){
    this.router.navigate(['/meeting-room', this.createdMeeting.roomId]);

  };

  getUserByEmail() {
    this.authService.getUserByEmail(this.searchUserForm.get('email')?.value).subscribe(
      async (response: any) => {
        if (response) {
          this.connectedUser = response
          console.log("this.searchUserForm.value : ", this.searchUserForm.value)
          console.log("connected user fetched successfully : ", response);

        }
      }, error => {
        console.log("failed fetching connected user , error : ", error);
        console.log("this.searchUserForm.value : ", this.searchUserForm.get('email')?.value);
      }
    )
  }

}
