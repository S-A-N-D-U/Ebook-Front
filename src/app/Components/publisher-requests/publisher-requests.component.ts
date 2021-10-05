import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-publisher-requests',
  templateUrl: './publisher-requests.component.html',
  styleUrls: ['./publisher-requests.component.css']
})
export class PublisherRequestsComponent implements OnInit {
  publishersDetails: any;
  userId: any;
  approved: boolean;

  constructor(public auth: AuthenticationService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.auth.showpublisherReqs().subscribe(posts => {
      this.publishersDetails = posts;
      console.log( this.publishersDetails)
    },
    err => {
      console.log(err)
    })
  }

  removePublisher(userId:any){
    this.userId = userId
    this.auth.deletePublisher(userId).subscribe(posts => {
      console.log(this.userId)
      this.ngOnInit()

    })
  }

  approve(userId:any){
    this.userId = userId
    this.approved= true
    this.auth.approvePublisher(this.userId,this.approved).subscribe(
      ()=> {
        console.log(this.approved)
        this.toastr.success("Post Approved","",{
          timeOut:2000
          
        })
        
      },err=> {
        console.error(err)
      }
    )
  }

}
