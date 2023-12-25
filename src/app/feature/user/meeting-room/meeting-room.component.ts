import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';
import {AuthService} from "../../../core/service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

function randomID() {

  return "haithem";
}

export function getUrlParams(
  url = window.location.href
) {
  let urlStr = "http://localhost:4200/meeting-room?";
  return new URLSearchParams(urlStr);
}

@Component({
  selector: 'app-meeting-room',
  templateUrl: './meeting-room.component.html',
  styleUrls: ['./meeting-room.component.css']
})
export class MeetingRoomComponent implements OnInit, AfterViewInit {
  @ViewChild('root', {static: false})
  root!: ElementRef;
  roomId!: string;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // Move the logic inside ngAfterViewInit to ensure the view has been initialized.

  }

  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      this.roomId = params['roomId'];
      console.log("the roomId get from url :", this.roomId);
    });
    const roomID = getUrlParams().get('roomID') || this.roomId;

    // const roomID =  "abcd";
    // const roomID: string = this.roomId;

    // generate Kit Token
    const appID = 2034051053;
    const serverSecret = "d8418c02454782573a6a40bbc1ad1194";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, this.authService.getUserDetails("id").toString(), this.authService.getUserDetails("username"));
    // const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, this.authService.getUserDetails("id"), this.authService.getUserDetails("username"));

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // Start a call.
    zp.joinRoom({
      container: this.root.nativeElement,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
            window.location.protocol + '//' +
            window.location.host + window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }
}


/*
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomID(len: number) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return "haithem";
}

export function getUrlParams(
  url = window.location.href
) {
  let urlStr = "http://localhost:4200/meeting-room?";
  return new URLSearchParams(urlStr);
}

@Component({
  selector: 'meeting-room',
  templateUrl: './meeting-room.component.html',
  styleUrls: ['./meeting-room.component.css'],
})
export class MeetingRoomComponent implements OnInit, AfterViewInit {
  @ViewChild('root', { static: false })
  root!: ElementRef;

  ngOnInit() {
    // Move the logic inside ngAfterViewInit to ensure the view has been initialized.
  }

  ngAfterViewInit() {
    const roomID = getUrlParams().get('roomID') || "abcd";

    // generate Kit Token
    const appID = 2034051053;
    const serverSecret = "d8418c02454782573a6a40bbc1ad1194";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // Start a call.
    zp.joinRoom({
      container: this.root.nativeElement,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
            window.location.protocol + '//' +
            window.location.host + window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }
}
*/
