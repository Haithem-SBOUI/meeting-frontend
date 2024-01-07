import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/service/auth.service";
import {UserDetails} from "../../../model/UserDetails.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isToggled = false;
  userDetails!: UserDetails;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userDetails = this.authService.getUserDetails("all");

  }

  toggleSidebar() {
    this.isToggled = !this.isToggled;
  }


}
