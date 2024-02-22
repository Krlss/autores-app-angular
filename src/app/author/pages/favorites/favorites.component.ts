import { Component, OnInit } from '@angular/core';
import {
  ResponseBooks,
  ResponseBooksWithId,
} from '@app/author/interfaces/author';
import { FavsService } from '@app/author/services/favs.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent implements OnInit {
  authors: string[] = [];
  books: ResponseBooks[] = [];

  constructor(private favService: FavsService) {}

  ngOnInit(): void {
    this.favService.getFavoritesAuthors().subscribe((authors) => {
      this.authors = authors;
    });

    this.favService.getFavoritesBooks().subscribe((books) => {
      this.books = books;
    });
  }

  removeFavoriteAuthor(author: string) {
    this.favService.removeFavoriteAuthor(author);
  }

  removeFavoriteBook(book: ResponseBooks) {
    this.favService.removeFavoriteBook(book as ResponseBooksWithId);
  }

  removeAllFavoritesAuthors() {
    this.favService.removeAllFavoritesAuthors();
  }

  removeAllFavoritesBooks() {
    this.favService.removeAllFavoritesBooks();
  }
}
