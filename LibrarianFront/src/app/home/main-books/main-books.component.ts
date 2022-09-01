import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Books, VolumeInfo, Item } from '../interfaces/books';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-books',
  templateUrl: './main-books.component.html',
  styleUrls: ['./main-books.component.css'],
})
export class MainBooksComponent implements OnInit {
  books: Item[] = [];
  errorMessage!: string;
  cargar: boolean = false;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    if (this.cargar) {
      this.bookService.getRandomBooks().subscribe({
        next: (data) => {
          this.books = data.items;

        },
        error: (err) => {
          this.errorMessage = err.errorMessage;
          console.error(this.errorMessage);
        }
      });

    } else {
      this.bookService.obtenerHistorial().subscribe({
        next: data => {
          this.books = data.items;


        },
      })
    }

  }
}
