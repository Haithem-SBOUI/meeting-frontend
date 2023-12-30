import {Component, OnInit} from '@angular/core';
import {MeetingService} from "../../../core/service/meeting.service";
import {MeetingDetails} from "../../../model/meeting-details.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-meeting',
  templateUrl: './all-meeting.component.html',
  styleUrls: ['./all-meeting.component.css']
})
export class AllMeetingComponent implements OnInit {
  // todo: add format time method
  meetingDetail: MeetingDetails[] = [];

  constructor(private meetingService: MeetingService, private router: Router) {
  }


  ngOnInit(): void {
    this.meetingService.getAllMeetings().subscribe(
      (response: any) => {
        if (response) {
          this.meetingDetail = response;
          console.log(this.meetingDetail)
        }
      }, error => {
        console.log("ya bacha an issue occurred while getting all meeting : ", error);

      }
    )
  }


  redirectToRoom(roomId: string | undefined) {
    this.router.navigate(['/meeting-room', roomId]);
  };

  redirectToDetails(roomId: string | undefined) {
    this.router.navigate(['/meeting-details', roomId]);
  };

  formatDateAndTime(dateTime: string | undefined): string {
    if (dateTime == undefined) {
      return "00:00";
    } else {
      const inputDate = new Date(dateTime);

      const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };

      const formattedDateString = inputDate.toLocaleString('en-US', options);

      return formattedDateString;
    }
  }

  copyTextToClipboard(text: string | undefined) {
    const textValue = text !== undefined ? text : '';
    const textArea = document.createElement('textarea');
    textArea.value = textValue;

    // Append the textarea to the document
    document.body.appendChild(textArea);

    // Select and copy the text
    textArea.select();
    document.execCommand('copy');

    // Remove the textarea
    document.body.removeChild(textArea);

    console.log('Text copied to clipboard:', text);
    alert('Text copied to clipboard!');
  }


}
