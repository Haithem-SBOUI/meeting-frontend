import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  private userBaseUrl = 'http://localhost:8080/api/v1/user';
  private meetingBaseUrl = 'http://localhost:8080/api/v1/meeting';


  constructor(private http: HttpClient) {
  }


  getAllUser() {
    return this.http.get(`${this.userBaseUrl}/all-user`);
  }


  getUserById(id: any) {
    return this.http.get(`${this.userBaseUrl}/show-user-by-id/${id}`);
  }


  updateUser(id: any, data: any) {
    return this.http.put(`${this.userBaseUrl}/update-user/${id}`, data);
  }

  deleteUserById(id: number) {
    return this.http.delete(`${this.userBaseUrl}/delete-user/${id}`);
  }

  getUserRole() {
    return this.http.get(`${this.userBaseUrl}/all-user-roles`);
  }

  getAllMeeting() {
    return this.http.get(`${this.meetingBaseUrl}/get-all-meeting`);
  }


  getMeetingById(roomId: string) {
    return this.http.get(`${this.meetingBaseUrl}/get-meeting-by-room-id/${roomId}`);
  }

updateMeeting(id: string, updatedMeeting: any) {
    return this.http.put<any>(`${this.meetingBaseUrl}/update-meeting/${id}/`, updatedMeeting);
}

updatePassword(id: any, data: any){
  return this.http.put(`${this.userBaseUrl}/update-password/${id}`, data);
}



}
