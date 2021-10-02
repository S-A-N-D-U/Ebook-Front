import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestingService } from './Services/testing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor (private router: Router , private test: TestingService) { }
  
  ngOnInit(): void {
   
  }
}
