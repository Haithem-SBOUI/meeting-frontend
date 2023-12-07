import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/service/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../model/User.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;
  user!: User;
  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['user', Validators.required]
    })
  }

  register(){
    this.authService.register(this.registerForm.value).subscribe(
      (response:any) => {

          console.log("response : ", response);
          console.log("this.registerForm.value : ", this.registerForm.value);

      },  error => {
        // Handle login error (e.g., display error message)
        console.error('error.error : ', error.error, 'error.status : ', error.status);
      }
    )
  }


}
