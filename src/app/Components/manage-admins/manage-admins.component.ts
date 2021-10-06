import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-manage-admins',
  templateUrl: './manage-admins.component.html',
  styleUrls: ['./manage-admins.component.css']
})
export class ManageAdminsComponent implements OnInit {
  adminDetails: any;
  userId: any;

  constructor(public auth: AuthenticationService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.auth.showAdmins().subscribe(posts => {
      this.adminDetails = posts;
      console.log( this.adminDetails)
    },
    err => {
      console.log(err)
    })
  }

  deleteAdmin(userId:any){
    this.userId = userId
    this.auth.deleteAdmin(userId).subscribe(posts => {
      console.log(this.userId)
      this.ngOnInit()

    })
  }

}
