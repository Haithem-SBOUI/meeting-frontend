import {Component, OnInit} from '@angular/core';
import {AdminUserService} from "../../../../core/service/admin-user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

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
              private fb: FormBuilder,
              private toastr: ToastrService) {
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
        this.meetingForm.get('meetingId')?.disable();
        this.meetingForm.get('organizerId')?.disable();
        this.meetingForm.get('roomId')?.disable();

      } else {
        console.log('response is undefined');
      }
    });


  }

  update() {
    if (this.meetingForm.valid) {
      const updatedForm = this.meetingForm.value;
      console.log('this.meetingForm.get(\'meetingId\') : ', <string>this.meetingForm.get('meetingId')?.value);
      console.log('form final before update : ', updatedForm);
      // this.adminUserServ.updateMeeting(<string>this.meetingForm.get('meetingId')?.value, updatedForm).subscribe(
      this.adminUserServ.updateMeeting(<string>this.meetingForm.get('meetingId')?.value, updatedForm).subscribe(
        (response) => {

          console.log('data li tbadlet : ', response);
          this.toastr.success('User updated successfully', 'Updated');
          this.router.navigate(['admin/dashboard/show-meeting']);
        },(error) => {
          console.log('erreuuuur : ', error);

          if (error.status === 400) {
            this.toastr.error(error.error.message, 'Error');
          } else {
            this.toastr.error('An unexpected error occurred', 'Error');
          }
        }
        );
    } else {
      console.log('form is not valid : ', this.meetingForm.value);
    }
  }


}
