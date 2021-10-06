import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  newReleases: Array<string> = ['Last 90 days', 'Last 30 days', 'Last 7 days'];

  books: Array<string> = [
    'Arts & Photography',
    'Business',
    'Children Books',
    'Computers & Technology',
    'Comics & Graphic Novels',
    'Education & Teaching',
    'Engineering & Transportation',
    'History',
    'Literature & Fiction',
    'Politics & Social Sciences',
    'Science Fiction & Fantasy',
    'Science & Math',
    'Sports & Outdoors',
  ];

  languages: Array<string> = [
    "Arabic",
    "English",
    "Sinhala",
    "Spanish",
    "Tamil"
  ];


  authors: Array<string> = [
    "William Shakespeare",
    "Angelina Aludo",
    "Enid Blyton",
    "J. K. Rowling",
    "Stephen King",
    "Lewis Carroll"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
