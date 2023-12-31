import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../../model/User.model";
import {AuthService} from "../../../../core/service/auth.service";
import {AdminUserService} from "../../../../core/service/admin-user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  implements OnInit {
  roleList: string[] = [];
  registerForm!: FormGroup;
  user!: User;

  constructor(private adminService: AdminUserService, private authService: AuthService, private fb: FormBuilder, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });

    this.adminService.getUserRole().subscribe(
      (response: any) => {
        this.roleList = response;
        if (this.roleList.length > 0) {
          this.registerForm.get('role')!.setValue("Select Role");
        }
        console.log("this.roleList : ", this.roleList)
      }, error => {
        console.error('error.error : ', error.error, 'error.status : ', error.status);
      }
    );
  }

  register() {
    this.authService.register(this.registerForm.value).subscribe(
      (response: any) => {
        console.log("response baad lcreation: ", response);
        console.log("this.registerForm.value : ", this.registerForm.value);
        this.toastr.success('User added successfully', 'Registered');

      }, error => {
        console.error('error.error : ', error.error, 'error.status : ', error.status);
        this.toastr.error(error.message, 'Error');

      }
    )
  }


}
