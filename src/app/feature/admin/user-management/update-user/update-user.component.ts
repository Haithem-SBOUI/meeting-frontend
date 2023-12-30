import {Component, OnInit} from '@angular/core';
import {AdminUserService} from "../../../../core/service/admin-user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user?: any;
  data: any;
  id!: number;

  constructor(private adminUserServ: AdminUserService, private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }


  userForm = this.fb.group({
    imageUrl: ['', Validators.required],
    username: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    role: ['', Validators.required]
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.adminUserServ.getUserById(this.id).subscribe((response: any) => {
      if (response) {
        this.user = response;
        console.log('OnInit mta3 updateUser component get user byId : ', this.user);

        this.userForm.patchValue({
          imageUrl: this.user?.imageUrl || '',
          username: this.user?.username || '',
          firstname: this.user?.firstname || '',
          lastname: this.user?.lastname || '',
          email: this.user?.email || '',
          password: this.user?.password,
          role: this.user?.role || ''
        });
      } else {
        console.log('response is undefined');
      }
    });
  }

  update() {
    if (this.userForm.valid) {
      const updatedForm = this.userForm.value;
      console.log('form final before update : ', updatedForm);
      this.adminUserServ.updateUser(this.id, updatedForm).subscribe(data => {
        console.log('data li tbadlet : ', data);
        alert('updated successfully');
        this.router.navigate(['admin/dashboard/show-user']);
      });
    } else {
      console.log('form is not valid : ', this.userForm.value);
    }
  }



}
