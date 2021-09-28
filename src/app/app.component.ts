import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestingService } from './Services/testing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  postsDetails: any;

  constructor (private router: Router , private test: TestingService) { }
  
  ngOnInit(): void {
    // console.log(this.auth.isLoggedIn());
    this.test.show().subscribe(posts => {
      console.log('aaaaaaaaa')
      this.postsDetails = posts
    },
    err => {
      console.log(err)
    })
  }
}
