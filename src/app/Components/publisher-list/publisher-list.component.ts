import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.css']
})
export class PublisherListComponent implements OnInit {
  publishersDetails: any;
  userId: any;

  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.showpublishers().subscribe(posts => {
      this.publishersDetails = posts;
      console.log( this.publishersDetails)
    },
    err => {
      console.log(err)
    })
  }

  deletePublisher(userId:any){
    this.userId = userId
    this.auth.deletePublisher(userId).subscribe(posts => {
      console.log(this.userId)
      this.ngOnInit()

    })
  }

}
