import { Component, OnInit } from '@angular/core';
import { Book } from '../../book/model/book';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  book: Book = {
    bookId: "book_01",
    authorName : "Angelina Aludo",
    bookName: "Line testing for long book names",
    bookUrl: "ebook-1.jpg",
    price: "19.99",
    rating: 3.4
  }

  constructor() { }

  ngOnInit(): void {
  }

}
