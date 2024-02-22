import { Component, Input } from '@angular/core';
import {
  ResponseBooks,
  ResponseBooksWithId,
} from '@app/author/interfaces/author';
import { FavsService } from '@app/author/services/favs.service';

@Component({
  selector: 'app-card-books-fav',
  templateUrl: './card-books-fav.component.html',
  styleUrl: './card-books-fav.component.css',
})
export class CardBooksFavComponent {
  @Input() books: ResponseBooks[] = [];
  
  constructor(private favService: FavsService) {}

  removeFavoriteBook(book: ResponseBooks) {
    this.favService.removeFavoriteBook(book as ResponseBooksWithId);
  }

  removeAllFavoritesBooks() {
    this.favService.removeAllFavoritesBooks();
  }
}
