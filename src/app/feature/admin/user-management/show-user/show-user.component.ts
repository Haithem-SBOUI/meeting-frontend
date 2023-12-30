import {Component, OnInit} from '@angular/core';
import {AdminUserService} from "../../../../core/service/admin-user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  allUsers: any;


  constructor(private toastr: ToastrService, private adminUserServ: AdminUserService, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Text Customer'
      }
    };

    this.getAllUsers();


  }

  getAllUsers(){
    this.adminUserServ.getAllUser().subscribe((response: any) => {
      this.allUsers = response;
      console.log("all users : ", this.allUsers)
    });
  }

  //

  //   this.adminUserServ.deleteUserById(id).subscribe(
  //   (response:any) => {
  //
  //       console.log('User deleted successfully ::::::', response);
  //       window.location.reload();
  //       // You can navigate to another page or perform additional actions after deletion
  //     },
  //     (error) => {
  //       console.error('Error deletddding user:', error);
  //       // Handle error, show a message, etc.
  //     }
  //   );
  // }

  deleteUser(id: number): void {
    this.adminUserServ.deleteUserById(id).subscribe(
      (response: any) => {
        console.log("User deleted successfully: ", response);
        this.toastr.success('User deleted successfully:', 'Deleted');
        this.getAllUsers();
      },
      (error) => {
        console.log("Error deleting meeting: ", error);
        this.toastr.error(error.message, 'Error');
        // Handle non-JSON response (e.g., plain text)
        if (error instanceof HttpErrorResponse && error.error instanceof ProgressEvent) {
          console.log("Non-JSON response: ", error.error);
        } else {
          console.log("JSON response: ", error.error);

        }
      }
    );
  }


}
