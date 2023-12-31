import {Component, OnInit} from '@angular/core';
import {AdminUserService} from "../../../../core/service/admin-user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-meeting',
  templateUrl: './update-meeting.component.html',
  styleUrls: ['./update-meeting.component.css']
})
export class UpdateMeetingComponent implements OnInit {

  meeting?: any;
  data: any;
  roomId!: string;

  constructor(private adminUserServ: AdminUserService, private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }


  meetingForm = this.fb.group({
    meetingId: ['', Validators.required],
    organizerId: ['', Validators.required],
    roomId: ['', Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required],
    dateTime: ['', Validators.required],
    maxAttendees: ['', Validators.required],
    status: ['', Validators.required]
  });


  ngOnInit(): void {
    this.roomId = this.route.snapshot.params['id'];
    this.adminUserServ.getMeetingById(this.roomId).subscribe((response: any) => {
      if (response) {
        this.meeting = response;
        console.log('OnInit mta3 update meeting component get meeting byId : ', this.meeting);

        this.meetingForm.patchValue({
          meetingId: this.meeting?.meetingId || '',
          organizerId: this.meeting?.organizer[0].email || '',
          roomId: this.meeting?.roomId || '',
          title: this.meeting?.title || '',
          description: this.meeting?.description || '',
          dateTime: this.meeting?.dateTime,
          maxAttendees: this.meeting?.maxAttendees || '',
          status: this.meeting?.status || ''
        });
        this.meetingForm.get('organizerId')?.disable();

      } else {
        console.log('response is undefined');
      }
    });


  }

  // update() {
  //   if (this.meetingForm.valid) {
  //     const updatedForm = this.meetingForm.value;
  //     console.log('form final before update : ', updatedForm);
  //     this.adminUserServ.updateMeeting(this.id, updatedForm).subscribe(data => {
  //       console.log('data li tbadlet : ', data);
  //       alert('updated successfully');
  //       this.router.navigate(['admin/dashboard/show-meeting']);
  //     });
  //   } else {
  //     console.log('form is not valid : ', this.meetingForm.value);
  //   }
  // }



}
