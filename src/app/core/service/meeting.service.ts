import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private baseUrl = 'http://localhost:8080/api/v1/meeting';

  constructor(private http: HttpClient) {
  }

  createMeeting(data: any){
    return this.http.post(`${this.baseUrl}/create`, data, {responseType: "text"});
  }



}
