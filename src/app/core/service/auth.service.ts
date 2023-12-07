import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/v1/user';

  constructor(private http: HttpClient) {
  }

  authenticate(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data);

  }

  saveUserDetails(user: any) {
    localStorage.setItem('userDetails', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem('userDetails');
  }

  register(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data, {responseType: "text"});

  }

}
