import { Injectable } from '@angular/core';
import { ResponseBooks, ResponseBooksWithId } from '../interfaces/author';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavsService {
  public favoritesAuthors = new BehaviorSubject<string[]>([]);
  public favoritesBooks = new BehaviorSubject<ResponseBooksWithId[]>([]);

  constructor() {
    const favAuthors = JSON.parse(
      localStorage.getItem('favoritesAuthors') || '[]'
    );
    const favBooks = JSON.parse(localStorage.getItem('favoritesBooks') || '[]');

    if (favAuthors) {
      this.favoritesAuthors.next(favAuthors);
    }

    if (favBooks) {
      this.favoritesBooks.next(favBooks);
    }
  }

  getFavoritesAuthors() {
    return this.favoritesAuthors.asObservable();
  }

  getFavoritesBooks() {
    return this.favoritesBooks.asObservable();
  }

  addFavoriteAuthor(author: string) {
    this.favoritesAuthors.next([...this.favoritesAuthors.getValue(), author]);
    localStorage.setItem(
      'favoritesAuthors',
      JSON.stringify(this.favoritesAuthors.getValue())
    );
  }

  addFavoriteBook(book: ResponseBooks) {
    const transfomBook = {
      ...book,
      id: crypto.randomUUID(),
    };

    this.favoritesBooks.next([...this.favoritesBooks.getValue(), transfomBook]);
    localStorage.setItem(
      'favoritesBooks',
      JSON.stringify(this.favoritesBooks.getValue())
    );
  }

  removeFavoriteAuthor(author: string) {
    this.favoritesAuthors.next(
      this.favoritesAuthors.getValue().filter((a) => a !== author)
    );

    localStorage.setItem(
      'favoritesAuthors',
      JSON.stringify(this.favoritesAuthors.getValue())
    );
  }

  removeFavoriteBook(book: ResponseBooksWithId) {
    this.favoritesBooks.next(
      this.favoritesBooks.getValue().filter((b) => b.id !== book.id)
    );

    localStorage.setItem(
      'favoritesBooks',
      JSON.stringify(this.favoritesBooks.getValue())
    );
  }

  isFavoriteAuthor(author: string) {
    return this.favoritesAuthors.getValue().includes(author);
  }

  removeAllFavoritesAuthors() {
    this.favoritesAuthors.next([]);
    localStorage.removeItem('favoritesAuthors');
  }

  removeAllFavoritesBooks() {
    this.favoritesBooks.next([]);
    localStorage.removeItem('favoritesBooks');
  }
}
