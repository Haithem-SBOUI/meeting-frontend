import {Component, OnInit} from '@angular/core';
import {UserDetails} from "../../../model/UserDetails.model";
import {AuthService} from "../../../core/service/auth.service";

@Component({
  selector: 'user-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userDetails!: UserDetails;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userDetails = this.authService.getUserDetails("all");

  }
}
