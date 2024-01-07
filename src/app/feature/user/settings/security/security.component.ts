import {Component, OnInit} from '@angular/core';
import {AdminUserService} from "../../../../core/service/admin-user.service";
import {AuthService} from "../../../../core/service/auth.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  roleList: string[] = [];
  user?: any;
  data: any;
  confirmPassword: string = '';

  id: number = this.authService.getUserDetails("id");

  constructor(private adminUserServ: AdminUserService,
              private authService: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) {
  }


  changePassword = this.fb.group({
    oldPassword: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmNewPassword: ['', Validators.required]
  });

  ngOnInit(): void {


  }

  updatePassword() {
    if (this.changePassword.get("confirmNewPassword")?.value == this.changePassword.get("newPassword")?.value) {

      if (this.changePassword.valid) {
        const updatedForm = this.changePassword.value;
        console.log('form final before update : ', updatedForm);
        this.adminUserServ.updatePassword(this.id, updatedForm).subscribe(
          response => {
            console.log('data li tbadlet : ', response);
            this.toastr.success('User updated successfully', 'Updated');
          }, error => {
            this.toastr.error(error.message, 'Error');
          }
        );
      } else {
        console.log('form is not valid : ', this.changePassword.value);
        this.toastr.error("form is not valid  ", 'Error');

      }
    } else {
      this.toastr.error("confirm password not equals", 'Error');
    }
  }


  back() {
    this.router.navigate(['admin/dashboard/show-user']);
  }


}
