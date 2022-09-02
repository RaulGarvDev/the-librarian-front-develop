import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/books';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-main-books',
  templateUrl: './main-books.component.html',
  styleUrls: ['./main-books.component.css'],
})
export class MainBooksComponent implements OnInit {
  books: Item[] = [];
  errorMessage!: string;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks() {
      this.bookService.getRandomBooks().subscribe({
        next: (data) => {
          this.books = data.items;
          console.log(this.books);


        },
        error: (err) => {
          this.errorMessage = err.errorMessage;
          console.error(this.errorMessage);
        }
      });

  }
}
