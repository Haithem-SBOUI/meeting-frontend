import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {AdminUserService} from "../../../../core/service/admin-user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {Subject} from "rxjs";

@Component({
  selector: 'app-show-meeting',
  templateUrl: './show-meeting.component.html',
  styleUrls: ['./show-meeting.component.css']
})
export class ShowMeetingComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  allMeeting: any;


  constructor(private toastr: ToastrService, private adminUserServ: AdminUserService, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
    };

    this.getAllMeeting();


  }

  getAllMeeting() {
    this.adminUserServ.getAllMeeting().subscribe(
      (response: any) => {
        this.allMeeting = response;
        console.log("all Meeting : ", this.allMeeting)
        this.dtTrigger.next(null);
      }, error => {
        console.log("error Meeting : ", error)

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
        this.getAllMeeting();
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
