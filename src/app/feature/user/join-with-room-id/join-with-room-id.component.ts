import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/service/auth.service";
import {MeetingService} from "../../../core/service/meeting.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-join-with-room-id',
  templateUrl: './join-with-room-id.component.html',
  styleUrls: ['./join-with-room-id.component.css']
})
export class JoinWithRoomIdComponent implements OnInit {

  roomIdToJoin!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private meetingService: MeetingService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.roomIdToJoin = this.fb.group({
      roomId: ['', Validators.required]
    });
  }


  redirectToRoom2(){
    this.router.navigate(['/meeting-room', this.roomIdToJoin.get("roomId")?.value]);
  };

}
