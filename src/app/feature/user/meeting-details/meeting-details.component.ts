import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MeetingService} from "../../../core/service/meeting.service";
import {MeetingDetails} from "../../../model/meeting-details.model";

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.css']
})
export class MeetingDetailsComponent implements OnInit {

  roomId!: String;
  meetingDetail!: any;

  constructor(private route: ActivatedRoute, private meetingService: MeetingService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.roomId = params['roomId'];
      console.log("the roomId get from url :", this.roomId);
    });

    this.meetingService.getMeetingByRoomId(this.roomId).subscribe(
      response => {
        this.meetingDetail = response;
        console.log("hedhi response :", this.meetingDetail);
      }, error => {
        console.log("hedhi error :", error);

      }
    )

  }


}
