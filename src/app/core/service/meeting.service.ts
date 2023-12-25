import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreatedMeet} from "../../model/CreatedMeet.model";

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private baseUrl = 'http://localhost:8080/api/v1/meeting';

  constructor(private http: HttpClient) {
  }

  createMeeting(data: any){
    return this.http.post<CreatedMeet>(`${this.baseUrl}/create`, data);
  }


  getMeetingByRoomId(roomId: String) {
    return this.http.get(`${this.baseUrl}/get-meeting-by-room-id/${roomId}`);
  }
}
